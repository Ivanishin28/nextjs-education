import Image from "next/image";
import { UserViewModel } from "../../types";

const UserCard = (props: UserViewModel) => {
  return (
    <div className="w-full h-auto p-3 flex-column content-center">
      <div className="aspect-square w-full relative">
        <Image src={props.image} alt={props.lastName} fill />
      </div>
      <div>
        <h3 className="text-2xl text-center font-bold text-slate-600">{`${props.firstName} ${props.lastName}`}</h3>
      </div>
    </div>
  );
};

export default UserCard;
