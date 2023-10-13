import { UserViewModel } from "../models/UserViewModel";

const mapApiToViewModel = (data: any): UserViewModel => {
  const model = new UserViewModel();
  if (data) {
    model.firstName = data.firstName;
    model.lastName = data.lastName;
    model.address = data.address.address;
    model.image = data.image;
  }

  return model;
};

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
        mapApiToViewModel(apiUser)
      );
      return users;
    });
};

export default SearchUsersByName;
