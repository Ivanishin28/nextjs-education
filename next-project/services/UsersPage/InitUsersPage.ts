import { UsersPaginationModel } from "../../models/UsersPaginationModel";
import GetCurrentPage from "./GetCurrentPage";
import GetUsersPage from "./GetUsersPage";

const InitUsersPage = async (pageParams: any) : UsersPaginationModel | null => {
  const currentPage = GetCurrentPage(pageParams);
  if (currentPage == null) {
    return null;
  }
  const PAGE_SIZE = 10;
  const users = await GetUsersPage(PAGE_SIZE, currentPage);
  return users;
};

export default InitUsersPage;
