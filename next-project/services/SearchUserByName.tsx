import { UserViewModel } from "../types";

const SearchUsersByName = async (
  name: string
): Promise<UserViewModel[] | null> => {
  return fetch(`https://dummyjson.com/users/search?q=${name}`)
    .then(async (response: any) => {
      const data = await response.json();
      if (!data || !data.users) {
        return null;
      }
      const apiUsers: any[] = data.users;
      const users: UserViewModel[] = apiUsers as UserViewModel[];
      return users;
    });
};

export default SearchUsersByName;
