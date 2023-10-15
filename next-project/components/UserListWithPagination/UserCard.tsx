import { UserViewModel } from "../../models/UserViewModel";

const UserCard = (props: UserViewModel) => {
  return (
    <div className="w-full h-auto p-3 flex-column content-center">
      <img src={props.image} alt="img" className="w-full" />
      <div className="">
        <h3 className="text-2xl text-center font-bold text-slate-600">{`${props.firstName} ${props.lastName}`}</h3>
      </div>
    </div>
  );
};

export default UserCard;
