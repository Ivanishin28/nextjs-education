import { useRef, useState, useEffect, useCallback, useMemo, FC } from "react";
import SearchUsersByName from "../services/SearchUserByName";
import { SearchUsersModalProps, UserDictionary, UserViewModel } from "../types";
import debounce from "lodash.debounce";
import UseDebounceRacing from "../hooks/useDebounceRacing";
import UsersDropdownModal from "./UsersDropdownModal";

export type SearchUsersModalProps = {
  onUserSelected: (user: UserViewModel) => void;
};

const SearchUsers: FC<SearchUsersModalProps> = ({ onUserSelected }) => {
  const [users, setUsers] = useState(new Array<UserViewModel>());
  const [nameField, setNameField] = useState("");
  const [isModalVisible, setModalVisible] = useState(true);

  const componentDivRef = useRef<HTMLDivElement>(null);

  const usersCache = useMemo(() => new UserDictionary(), []);
  const debouncedFetchUsers = useMemo(
    () =>
      debounce(
        async (name: string, setUsers: (users: UserViewModel[]) => void) => {
          let users: UserViewModel[];
          const cachedUser = usersCache.getItem(name);
          if (cachedUser) {
            users = cachedUser;
          } else {
            users = await filterUsers(name);
            usersCache.setItem(name, users);
          }
          setUsers(users);
        },
        500
      ),
    []
  );

  useEffect(() => {
    let flag = true;
    const fetchUsers = async () => {
      debouncedFetchUsers(nameField, (users: UserViewModel[]) => {
        if (flag) {
          setUsers(users);
        }
      });
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

  return (
    <div ref={componentDivRef} className="relative w-full">
      <input
        name="searchUserInput"
        type="text"
        autoComplete="off"
        className="text-xl font-bold text-slate-600 p-2"
        value={nameField}
        onChange={(event) => onNameChange(event.target.value)}
      ></input>
      {isModalVisible ? (
        <UsersDropdownModal
          users={users}
          parentRef={componentDivRef}
          onUserSelected={onUserSelected}
          setModalVisible={(isVisible: boolean) => setModalVisible(isVisible)}
        ></UsersDropdownModal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchUsers;
