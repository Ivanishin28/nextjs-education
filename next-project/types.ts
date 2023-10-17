export type SearchUsersModalProps = {
  onUserSelected: (user: UserViewModel) => void;
};

export type UserListWithPaginationProps = {
  paginationModel: UsersPaginationModel;
  onUserSelected: (user: UserViewModel) => void;
};

export type UserViewModel = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export type UsersPaginationModel = {
  pageSize: number;
  pageCount: number;
  currentPage: number;
  items: Array<UserViewModel>;
}
