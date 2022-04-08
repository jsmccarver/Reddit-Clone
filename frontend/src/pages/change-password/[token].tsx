import { Box, Button } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { router } from "websocket";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { toErrorMap } from "../../utils/toErrorMap";

export const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {}}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="New Password"
              label="New Password"
            />
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ChangePassword;
