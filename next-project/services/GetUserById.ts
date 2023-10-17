import { UserViewModel } from "../types";

const GetUserById = async (id: number): Promise<UserViewModel> => {
  return fetch(`https://dummyjson.com/users/${id}`).then(async (res) => {
    const data = await res.json();
    const model = data as UserViewModel;
    return model;
  });
};

export default GetUserById;
