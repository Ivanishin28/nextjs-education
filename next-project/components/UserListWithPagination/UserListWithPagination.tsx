import { UserListWithPaginationProps } from "../../models/Props/UserListWithPaginationProps";
import { UserViewModel } from "../../models/UserViewModel";
import Pagination from "./Pagination";
import UserCard from "./UserCard";

const UserListWithPagination = (props: UserListWithPaginationProps) => {
  return (
    <>
      <div className="user-list flex flex-wrap">
        {props.paginationModel?.items?.map((item: UserViewModel) => (
          <div
            className="w-1/5 p-2 cursor-pointer"
            key={item.id}
            onClick={() => props.onUserSelected(item)}
          >
            <UserCard key={item.id} {...item}></UserCard>
          </div>
        ))}
      </div>
      <Pagination {...props.paginationModel}></Pagination>
    </>
  );
};

export default UserListWithPagination;
