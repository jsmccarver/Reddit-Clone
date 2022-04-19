import { Grid, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { Key, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { useGetUserPostsQuery, useGetuserQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

export const UserPage: NextPage<{ user: string }> = ({ user }) => {
  const [activeUser, setUser] = useState(false);
  const [userPosts, setPosts] = useState<any>([{}]);
  const [{ data }] = useGetuserQuery({
    variables: {
      username: user,
    },
  });

  const posts = useGetUserPostsQuery({
    variables: {
      id: data?.getuser?.id!,
    },
  });
  console.log(posts);

  useEffect(() => {
    if (data?.getuser?.username) {
      setUser(true);
    }
  }),
    [data];

  useEffect(() => {
    if (activeUser == true && posts[0].data != undefined) {
      setPosts(posts[0]!.data!.getUserPosts);
    }
  }),
    [activeUser];

  return (
    <Layout>
      <div>
        {activeUser ? (
          <Box>
            hello {data?.getuser?.username}
            <div>user created on: {data?.getuser?.createdAt}</div>
            <Grid templateColumns="1fr" gap={4}>
              {userPosts.map(
                (post: {
                  id: Key | undefined;
                  points: undefined | number;
                  creatorUsername: undefined | string;
                  createdAt: undefined | string;
                  title: undefined | string;
                  text: undefined | string;
                }) => (
                  <Grid
                    templateColumns="50px auto"
                    cursor="pointer"
                    border="1px #ccc"
                    borderRadius="4px"
                    gap={0}
                    key={post.id}
                    _hover={{ borderColor: "black" }}
                  >
                    <Flex
                      bg="#f8f9fa"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {post.points}
                    </Flex>
                    <Box bg="white">
                      <Box>
                        <Text color="grey" fontSize="sm" p={1}>
                          Post by u/{post.creatorUsername} Created At:
                          {post.createdAt}
                        </Text>
                      </Box>
                      <Box>
                        <Heading fontSize="lg" p={1}>
                          {post.title}
                        </Heading>
                      </Box>
                      <Box>
                        <Text fontSize="sm" p={1}>
                          {post.text}
                        </Text>
                      </Box>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        ) : (
          <div>No User with this name</div>
        )}
      </div>
    </Layout>
  );
};

UserPage.getInitialProps = ({ query }) => {
  return {
    user: query.user as string,
  };
};
export default withUrqlClient(createUrqlClient, { ssr: true })(UserPage);
