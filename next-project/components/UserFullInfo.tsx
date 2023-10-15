import { UserViewModel } from "../models/UserViewModel";

const UserFullInfo = (props: UserViewModel) => {
  return (
    <div className="flex w-auto">
      <div className="">
        <img className="w-72" src={props.image}></img>
      </div>

      <div className="pt-8">
        <div className="">
          <p className="leading-none text-slate-500">First Name:</p>
          <p className="text-2xl font-bold text-slate-600">
            {`${props.firstName}`}
          </p>
        </div>
        <div className="mt-4">
          <p className="leading-none text-slate-500">Last Name:</p>
          <p className="text-2xl font-bold text-slate-600">
            {`${props.lastName}`}
          </p>
        </div>
        <div className="mt-4">
          <p className="leading-none text-slate-500">Address: </p>
          <p className="text-2xl font-bold text-slate-600">{props.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserFullInfo;
