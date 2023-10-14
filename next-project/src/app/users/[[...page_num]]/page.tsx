"use client";

import { useEffect, useState } from "react";
import SearchUsers from "../../../../components/SearchUsers";
import UserListWithPagination from "../../../../components/UserListWithPagination/UserListWithPagination";
import { UsersPaginationModel } from "../../../../models/UsersPaginationModel";
import { useRouter } from "../../../../node_modules/next/navigation";
import InitUsersPage from "../../../../services/UsersPage/InitUsersPage";

const UsersPage = (params: any) => {
  const [paginatedUsers, setPaginatedUsers] = useState(
    new UsersPaginationModel()
  );
  const router = useRouter();
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

  // const paginatedRes = await InitUsersPage(params);
  // if (!paginatedRes) {
  //   router.push("404");
  // }
  // setPaginatedUsers(paginatedRes!);

  return (
    <div className="s">
      <div className="">
        <SearchUsers></SearchUsers>
      </div>
      <div className="">
        <UserListWithPagination {...paginatedUsers}></UserListWithPagination>
      </div>
    </div>
  );
};

export default UsersPage;
