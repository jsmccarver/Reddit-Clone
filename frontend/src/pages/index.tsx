import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
import { Layout } from "../components/Layout";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/core";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <Layout>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <Grid templateColumns="1fr" gap={4}>
          {data.posts.map((post) => (
            <Grid
              templateColumns="1fr 13fr"
              border="1px"
              borderColor="grey.100"
              gap={0}
              key={post.id}
            >
              <Flex bg="grey.100" alignItems="center" justifyContent="center">
                {post.points}
              </Flex>
              <Box>
                <Box>
                  <Heading p={1}>{post.title}</Heading>
                </Box>
                <Box>
                  <Text p={1}>{post.text}</Text>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
