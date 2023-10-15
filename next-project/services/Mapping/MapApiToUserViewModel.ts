import { UserViewModel } from "../../models/UserViewModel";

const MapApiToUserViewModel = (data: any): UserViewModel => {
  const model = new UserViewModel();
  if (data) {
    model.id = data.id;
    model.firstName = data.firstName;
    model.lastName = data.lastName;
    model.address = data.address.address;
    model.image = data.image;
  }

  return model;
};

export default MapApiToUserViewModel;
