import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import SearchUsersByName from "../services/SearchUserByName";
import { SearchUsersModalProps, UserViewModel } from "../types";

const SearchUsers = (props: SearchUsersModalProps) => {
  const [foundUsersValue, foundUsersChange] = useState(
    new Array<UserViewModel>()
  );
  const [nameValue, nameChange] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setModalVisible(false);
      }
    };

    window.addEventListener("click", handleOutSideClick);

    return () => {
      window.removeEventListener("click", handleOutSideClick);
    };
  }, [ref]);

  const filterUsers = async (name: string) => {
    if (!name) {
      foundUsersChange([]);
      return;
    }
    const users = await SearchUsersByName(name);
    if (users) {
      foundUsersChange(users);
    }

    return users;
  };

  const onNameChange = async (name: string) => {
    nameChange(name);
    const users = await filterUsers(name);
    if (users && users.length) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const renderModal = (isVisible: boolean) => {
    return isVisible ? (
      <div className="absolute overflow-y-auto max-h-72 bg-slate-600 shadow z-10 flex-column min-fit w-full px-3">
        {foundUsersValue.map((user) => (
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => props.onUserSelected(user)}
            key={user.firstName}
          >
            <div className="flex items-center">
              <div className="relative w-16 aspect-square">
                <Image src={user.image} alt={user.lastName} fill />
              </div>
              <p className="ml-1 text-slate-400">
                {`${user.firstName} ${user.lastName}`}
              </p>
            </div>

            <p className="text-slate-400">{">"}</p>
          </div>
        ))}
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div ref={ref} className="relative w-full">
      <input
        name="searchUserInput"
        type="text"
        className="text-xl font-bold text-slate-600 p-2"
        value={nameValue}
        onChange={(event) => onNameChange(event.target.value)}
      ></input>
      <>{renderModal(isModalVisible)}</>
    </div>
  );
};

export default SearchUsers;
