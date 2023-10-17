import { UsersPaginationModel, UserViewModel } from "../../types";

const GetUsersPage = (
  pageSize: number,
  currentPage: number
): Promise<UsersPaginationModel> => {
  const skip = (currentPage - 1) * pageSize;

  return fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`)
    .then((res) => res.json())
    .then((res) => {
      const pageCount = Math.floor(res.total / pageSize);
      const items = res.users as UserViewModel[];
      return {
        pageCount,
        pageSize,
        items,
        currentPage,
      };
    });
};

export default GetUsersPage;
