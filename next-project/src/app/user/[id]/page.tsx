"use client";

import { useEffect, useState } from "react";
import UserFullInfo from "../../../../components/UserFullInfo";
import { UserViewModel } from "../../../../models/UserViewModel";
import GetUserById from "../../../../services/GetUserById";

const UserPage = ({ params: { id } }: { params: { id: number } }) => {
  const [user, setUser] = useState(new UserViewModel());

  useEffect(() => {
    const getUser = async () => {
      const user = await GetUserById(id);
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div className="flex justify-center	">
      {user && <UserFullInfo {...user}></UserFullInfo>}
    </div>
  );
};

export default UserPage;
