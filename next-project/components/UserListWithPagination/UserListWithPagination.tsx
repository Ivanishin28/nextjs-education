import { UsersPaginationModel } from "../../models/UsersPaginationModel";
import { UserViewModel } from "../../models/UserViewModel";
import Pagination from "./Pagination";
import UserCard from "./UserCard";

const UserListWithPagination = (props: UsersPaginationModel) => {
  console.log(props);
  return (
    <>
      <div className="user-list flex flex-wrap">
        {props.items?.map((item: UserViewModel) => (
          <UserCard
            key={`${item.firstName} ${item.lastName}}`}
            {...item}
          ></UserCard>
        ))}
      </div>
      <Pagination {...props}></Pagination>
    </>
  );
};

export default UserListWithPagination;
