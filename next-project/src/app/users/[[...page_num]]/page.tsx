"use client";

import { useEffect, useState } from "react";
import SearchUsers from "../../../../components/SearchUsers";
import UserListWithPagination from "../../../../components/UserListWithPagination/UserListWithPagination";
import { UsersPaginationModel } from "../../../../models/UsersPaginationModel";
import { UserViewModel } from "../../../../models/UserViewModel";
import { useRouter } from "../../../../node_modules/next/navigation";
import InitUsersPage from "../../../../services/UsersPage/InitUsersPage";

const UsersPage = (params: any) => {
  const [paginatedUsers, setPaginatedUsers] = useState(
    new UsersPaginationModel()
  );

  const router = useRouter();

  const navigateToUserPage = (userId: number) => {
    router.push(`/user/${userId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const paginatedRes = await InitUsersPage(params);
      if (!paginatedRes) {
        router.push("404");
      }
      setPaginatedUsers(paginatedRes!);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="w-72">
        <SearchUsers
          onUserSelected={(user) => navigateToUserPage(user.id)}
        ></SearchUsers>
      </div>
      <div className="">
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
