import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>BISTRO | User Home</title>
      </Helmet>
      <h2>
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "back"}
      </h2>
    </div>
  );
};

export default UserHome;
