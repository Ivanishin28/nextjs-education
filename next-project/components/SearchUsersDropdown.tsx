"use client";

import { useState } from "react";
import { UserViewModel } from "../models/UserViewModel";

export interface UsersDropdownProps {
  options: UserViewModel[];
  onNameFieldChange?: (name: string) => void;
}

const SearchUsersDropdown = (props: UsersDropdownProps) => {
  const [nameValue, nameChange] = useState("");

  const onNameChange = (name: string) => {
    nameChange(name);
    props.onNameFieldChange && props.onNameFieldChange(name);
  };

  return (
    <div className="w-full">
      <div className="">
        <input
          name="searchUserInput"
          type="text"
          className="w-full"
          value={nameValue.valueOf()}
          onChange={(event) => onNameChange(event.target.value)}
        ></input>
      </div>
      <div className="flex-row">
        {props.options.map((user: UserViewModel) => (
          <div
            className="flex justify-between items-center"
            key={user.firstName}
          >
            <div className="flex items-center">
              <img width={"50px"} src={user.image} />
              <p className="">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <p className="">{">"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUsersDropdown;
