import { FC } from "react";
import UserFullInfo from "../../../components/UserFullInfo";
import { useRouter } from "../../../node_modules/next/navigation";
import GetUserById from "../../../services/GetUserById";
import { UserViewModel } from "../../../types";
import { GetServerSideProps } from "next";

export type UserPageProps = {
  user: UserViewModel;
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context: any
) => {
  if (context.query.id && typeof context.query.id == "string") {
    const user = await GetUserById(Number(context.query.id));
    return user ? { props: { user: user } } : null;
  }
};

const UserPage: FC<UserPageProps> = ({ user }) => {
  const router = useRouter();

  if (!user) {
    router.push("/404");
  }

  return (
    <div className="flex justify-center	">
      {user && <UserFullInfo user={user}></UserFullInfo>}
    </div>
  );
};

export default UserPage;
