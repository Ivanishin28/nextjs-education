import Image from "next/image";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import SearchUsersByName from "../services/SearchUserByName";
import { SearchUsersModalProps, UserViewModel } from "../types";
import debounce from "lodash.debounce";
import UseDebounceRacing from "../hooks/useDebounceRacing";

const SearchUsers = (props: SearchUsersModalProps) => {
  const [users, setUsers] = useState(new Array<UserViewModel>());
  const [nameField, setNameField] = useState("");
  const [isModalVisible, setModalVisible] = useState(true);

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

  const delay = (ms: number, isRandom: boolean = false) => {
    const toWait = ms * (isRandom ? Math.random() : 1);
    return new Promise((res) => setTimeout(res, toWait));
  };

  const deb = useMemo(
    () =>
      debounce(async (name: string, cancellation: () => boolean) => {
        console.log("deb");
        await delay(3000);
        const users = await filterUsers(name);
        const flag = cancellation();
        if (flag) {
          setUsers(users);
        }
      }, 500),
    []
  );

  useEffect(() => {
    let flag = true;
    const fetchUsers = async () => {
      deb(nameField, () => flag);
    };

    fetchUsers();

    return () => {
      flag = false;
    };
  }, [nameField]);

  const filterUsers = async (name: string) => {
    let users: Array<UserViewModel>;
    if (!name) {
      users = [];
    } else {
      users = (await SearchUsersByName(name)) ?? [];
    }

    return users;
  };

  const onNameChange = async (name: string) => {
    setNameField(name);
    setModalVisible(true);
  };

  const renderModal = (isVisible: boolean) => {
    return isVisible ? (
      <div className="absolute overflow-y-auto max-h-72 bg-slate-600 shadow z-10 flex-column min-fit w-full px-3">
        {users.map((user) => (
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => props.onUserSelected(user)}
            key={user.id}
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
        autoComplete="off"
        className="text-xl font-bold text-slate-600 p-2"
        value={nameField}
        onChange={(event) => onNameChange(event.target.value)}
      ></input>
      <>{renderModal(isModalVisible)}</>
    </div>
  );
};

export default SearchUsers;
