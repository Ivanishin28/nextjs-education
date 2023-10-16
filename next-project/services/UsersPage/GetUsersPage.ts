import { UsersPaginationModel } from "../../types";

const GetUsersPage = (
  pageSize: number,
  currentPage: number
): Promise<UsersPaginationModel> => {
  const pagination = new UsersPaginationModel();
  pagination.pageSize = pageSize;
  pagination.currentPage = currentPage;
  const skip = (currentPage - 1) * pageSize;

  return fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`)
    .then((res) => res.json())
    .then((res) => {
      pagination.pageCount = Math.floor(res.total / pageSize);
      pagination.items = res.users;
      return pagination;
    });
};

export default GetUsersPage;
