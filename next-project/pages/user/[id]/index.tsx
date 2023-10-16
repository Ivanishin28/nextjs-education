import { useEffect, useState } from "react";
import UserFullInfo from "../../../components/UserFullInfo";
import { UserViewModel } from "../../../models/UserViewModel";
import { useParams } from "../../../node_modules/next/navigation";
import GetUserById from "../../../services/GetUserById";

const UserPage = () => {
  const [user, setUser] = useState(new UserViewModel());
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
      {user && <UserFullInfo {...user}></UserFullInfo>}
    </div>
  );
};

export default UserPage;
