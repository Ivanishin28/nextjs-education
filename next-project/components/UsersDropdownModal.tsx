import Image from "next/image";
import { FC, RefObject, useEffect } from "react";
import { UserViewModel } from "../types";

export type UserDropdownModalProps = {
  parentRef: RefObject<HTMLDivElement>;
  onUserSelected: (user: UserViewModel) => void;
  setModalVisible: (isVisible: boolean) => void;
  users: UserViewModel[];
};

const UsersDropdownModal: FC<UserDropdownModalProps> = ({
  users,
  onUserSelected,
  setModalVisible,
  parentRef,
}) => {
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!parentRef?.current?.contains(event.target as Node)) {
        setModalVisible(false);
      }
    };

    window.addEventListener("click", handleOutSideClick);

    return () => {
      window.removeEventListener("click", handleOutSideClick);
    };
  }, [parentRef]);

  return (
    <div className="absolute overflow-y-auto max-h-72 bg-slate-600 shadow z-10 flex-column min-fit w-full px-3">
      {users.map((user) => (
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => onUserSelected(user)}
          key={user.id}
        >
          <div className="flex items-center">
            <div className="relative w-16 aspect-square">
              <Image src={user.image} sizes="10vw" alt={user.lastName} fill />
            </div>
            <p className="ml-1 text-slate-400">
              {`${user.firstName} ${user.lastName}`}
            </p>
          </div>

          <p className="text-slate-400">{">"}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersDropdownModal;
