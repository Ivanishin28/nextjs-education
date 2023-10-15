import { UserViewModel } from "../models/UserViewModel";
import MapApiToUserViewModel from "./Mapping/MapApiToUserViewModel";

const SearchUsersByName = async (
  name: string
): Promise<UserViewModel[] | null> => {
  return fetch(`https://dummyjson.com/users/search?q=${name}`)
    .then(async (response: any) => {
      return response.json();
    })
    .then((data: any) => {
      if (!data || !data.users) {
        return null;
      }
      const apiUsers: any[] = data.users;
      const users: UserViewModel[] = apiUsers.map((apiUser: any) =>
        MapApiToUserViewModel(apiUser)
      );
      return users;
    });
};

export default SearchUsersByName;
