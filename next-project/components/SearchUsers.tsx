import { ChangeEvent, useState } from "react";
import { UserViewModel } from "../models/UserViewModel";
import SearchUsersByName from "../services/SearchUserByName";
import SearchUsersDropdown from "./SearchUsersDropdown";

const SearchUsers = () => {
  const [foundUsersValue, foundUsersChange] = useState(
    new Array<UserViewModel>()
  );

  const filterUsers = async (name: string) => {
    const users = await SearchUsersByName(name);
    console.log(users);
    if (users) {
      foundUsersChange(users);
    }
  };

  const handleValueChange = async (value: string) => {
    await filterUsers(value);
  };
  return (
    <>
      <SearchUsersDropdown
        options={foundUsersValue}
        onNameFieldChange={(name: string) => handleValueChange(name)}
      ></SearchUsersDropdown>
    </>
  );
};

export default SearchUsers;
