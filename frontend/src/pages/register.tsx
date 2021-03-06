import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else {
            // worked
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
