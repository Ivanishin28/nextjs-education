import { UsersPaginationModel } from "../UsersPaginationModel";
import { UserViewModel } from "../UserViewModel";

export class UserListWithPaginationProps {
  public paginationModel: UsersPaginationModel;
  public onUserSelected = (user: UserViewModel): void => {};
}
