import Image from "next/image";
import { FC } from "react";
import { UserViewModel } from "../types";

export type UserFullInfoProps = {
  user: UserViewModel;
};

const UserFullInfo: FC<UserFullInfoProps> = ({ user }) => {
  return (
    <div className="flex w-auto">
      <div className="relative w-72 aspect-square">
        <Image src={user.image} alt={user.lastName} fill />
      </div>

      <div className="pt-8">
        <div>
          <p className="leading-none text-slate-500">First Name:</p>
          <p className="text-2xl font-bold text-slate-600">
            {`${user.firstName}`}
          </p>
        </div>
        <div className="mt-4">
          <p className="leading-none text-slate-500">Last Name:</p>
          <p className="text-2xl font-bold text-slate-600">{user.lastName}</p>
        </div>
        <div className="mt-4">
          <p className="leading-none text-slate-500">Gender: </p>
          <p className="text-2xl font-bold text-slate-600">{user.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default UserFullInfo;
