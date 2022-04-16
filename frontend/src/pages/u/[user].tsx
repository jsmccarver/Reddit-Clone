import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

export const UserPage: NextPage<{ user: string }> = ({ user }) => {

return(<div><div>hello {user}</div></div>)
}

UserPage.getInitialProps = ({ query }) => {
    return {
      user: query.user as string,
    };
  };
export default withUrqlClient(createUrqlClient)(UserPage);
