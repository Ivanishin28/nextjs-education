import { UserViewModel } from "../models/UserViewModel";
import MapApiToUserViewModel from "./Mapping/MapApiToUserViewModel";

const GetUserById = (id: number) => {
  return fetch(`https://dummyjson.com/users/${id}`)
    .then((res) => res.json())
    .then((res) => {
      const model = MapApiToUserViewModel(res);
      console.log(model);
      return model;
    });
};

export default GetUserById;
