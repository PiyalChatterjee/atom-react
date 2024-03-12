import { useEffect } from "react";
import { useGetUsersData } from "../Queries/Users";

const Users = () => {
  const [
    getUserData,
    { data: userData, error: userError, loading: userLoading },
  ] = useGetUsersData();

  useEffect(() => {
    getUserData({
      errorPolicy: "all",
      fetchPolicy: "network-only",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("log:: query output", userData);
    console.log("log:: query loading", userLoading);
    console.log("log:: query error", userError);
  }, [userData, userLoading, userError]);

  return <div>Users</div>;
};

export default Users;
