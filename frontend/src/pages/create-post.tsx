import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { useCreatePostMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

export const createPost: React.FC<{}> = ({}) => {
  const [, createPost] = useCreatePostMutation();
  const router = useRouter();
  return (
    <Layout>
      <Wrapper variant="small">
        <Formik
          initialValues={{ title: "", text: "" }}
          onSubmit={async (values) => {
            const { error } = await createPost({ input: values });
            if (error) {
              router.push("/login");
            } else;
            {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="title"
                placeholder="username or email"
                label="Title"
              />
              <Box mt={4}>
                <InputField
                  textarea
                  name="text"
                  placeholder="Text (optional)"
                  label="Body"
                  type="text"
                />
              </Box>
              <Button mt={4} type="submit" isLoading={isSubmitting}>
                Create Post
              </Button>
              <Button mt={4} type="submit" isLoading={isSubmitting}>
                Cancel
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(createPost);
