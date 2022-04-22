import { isAUth } from "../middleware/isAuth";
import { MyContext } from "../types";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  Field,
  InputType,
  Ctx,
  UseMiddleware,
  Int,
  FieldResolver,
  Root,
  ObjectType,
} from "type-graphql";
import { Post } from "../entities/Post";
import dataSource from "../index";
import { Upvote } from "../entities/Upvote";

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() post: Post): string {
    return post.text.slice(0, 800);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAUth)
  async vote(
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    const isUpvote = value !== -1;
    const { userId } = req.session;
    const Vote: number = isUpvote ? 1 : -1;
    const upvote = await Upvote.findOne({ where: { postId, userId } });
    if (upvote && upvote.value !== Vote) {
      await dataSource.transaction(async (tm) => {
        await tm.query(
          `
          update upvote
          set value = $1
          where "postId" = $2 and "userId" = $3
        `,
          [Vote, postId, userId]
        );

        await tm.query(
          `
          update post
          set points = points + $1
          where id = $2
        `,
          [2 * Vote, postId]
        );
      });
    } else if (upvote && upvote.value === Vote) {
      await dataSource.transaction(async (tm) => {
        let Vote_Correction = isUpvote ? -1 : 1;
        await tm.query(
          `
          delete from upvote
          where "postId" = $1 and "userId" = $2
        `,
          [postId, userId]
        );
        await tm.query(
          `
            update post
            set points = points + $1
            where id = $2
            `,
          [Vote_Correction, postId]
        );
      });
    } else if (!upvote) {
      await dataSource.transaction(async (tm) => {
        await tm.query(`
          insert into upvote ("userId", "postId", value)
          values (${userId},${postId},${value});
        `);
        await tm.query(`    
          update Post 
          set points = points + ${Vote}
          where id = ${postId};
        `);
      });
    }

    return true;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPosts> {
    // fetch 21, but then check if 21 are there because then there are more to show
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];
    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }
    const posts = await dataSource.query(
      `
    select p.*,
    json_build_object(
      'id', u.id,
      'username', u.username,
      'email', u.email,
      'createdAt', u."createdAt",
      'updatedAt', u."updatedAt"
      ) creator
    
    from post p
    inner join public.user u on u.id = p."creatorId"
    ${cursor ? `where p."createdAt" < $2` : ""}
    order by p."createdAt" DESC
    limit $1
    `,
      replacements
    );
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number): Promise<Post | null> {
    return Post.findOneBy({ id: id });
  }

  @Query(() => [Post])
  getUserPosts(@Arg("id") id: number): Promise<Post[] | null> {
    return Post.findBy({ creatorId: id });
  }

  @Mutation(() => Post)
  @UseMiddleware(isAUth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId,
      creatorUsername: req.session.username,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string
  ): Promise<Post | null> {
    const post = await Post.findOneBy({ id: id });
    if (!post) {
      return null;
    }
    if (typeof title !== "undefined") {
      post.title = title;
      Post.update({ id }, { title });
    }
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number): Promise<boolean> {
    try {
      Post.delete(id);
    } catch (err) {
      return err;
    }
    return true;
  }
}
