import { UserViewModel } from "../../models/UserViewModel";

const UserCard = (props: UserViewModel) => {
  return (
    <div className="user-card ">
      <img src={props.image} width="50px" height="50px"></img>
    </div>
  );
};

export default UserCard;
