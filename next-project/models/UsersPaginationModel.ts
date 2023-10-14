import { UserViewModel } from "./UserViewModel";

export class UsersPaginationModel {
  public pageSize: number;
  public pageCount: number;
  public currentPage: number;
  public items: Array<UserViewModel>;
}
