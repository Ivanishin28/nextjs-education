import { FC, useEffect, useState } from "react";
import UserFullInfo from "../../../components/UserFullInfo";
import { useParams } from "../../../node_modules/next/navigation";
import GetUserById from "../../../services/GetUserById";
import { UserViewModel } from "../../../types";

const UserPage: FC<void> = () => {
  const [user, setUser] = useState<UserViewModel | null>(null);
  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      if (params.id && params.id.length) {
        const user = await GetUserById(Number(params.id[0]));
        setUser(user);
      }
    };

    params && getUser();
  }, [params]);

  return (
    <div className="flex justify-center	">
      {user && <UserFullInfo user={user}></UserFullInfo>}
    </div>
  );
};

export default UserPage;
