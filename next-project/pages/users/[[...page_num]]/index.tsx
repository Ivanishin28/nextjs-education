import { useEffect, useState } from "react";
import SearchUsers from "../../../components/SearchUsers";
import UserListWithPagination from "../../../components/UserListWithPagination/UserListWithPagination";
import { useParams } from "../../../node_modules/next/navigation";
import { useRouter } from "../../../node_modules/next/router";
import InitUsersPage from "../../../services/UsersPage/InitUsersPage";
import { UsersPaginationModel } from "../../../types";

const UsersPage = () => {
  const [paginatedUsers, setPaginatedUsers] = useState(
    new UsersPaginationModel()
  );
  const router = useRouter();

  const params = useParams();

  const navigateToUserPage = (userId: number) => {
    router.push(`/user/${userId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const paginatedRes = await InitUsersPage(params);
      if (!paginatedRes) {
        router.push("/404");
      } else {
        setPaginatedUsers(paginatedRes!);
      }
    };
    params && fetchData();
  }, [params]);

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="w-72">
        <SearchUsers
          onUserSelected={(user) => navigateToUserPage(user.id)}
        ></SearchUsers>
      </div>
      <div>
        <UserListWithPagination
          paginationModel={paginatedUsers}
          onUserSelected={(user: UserViewModel) => {
            navigateToUserPage(user.id);
          }}
        ></UserListWithPagination>
      </div>
    </div>
  );
};

export default UsersPage;
