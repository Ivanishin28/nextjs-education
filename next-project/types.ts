export type UserViewModel = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export type UsersPaginationModel = {
  pageSize: number;
  pageCount: number;
  currentPage: number;
  items: Array<UserViewModel>;
};

export type UserDictionaryItem = {
  key: string;
  data: UserViewModel[];
};

export class UserDictionary {
  private items: UserDictionaryItem[];

  constructor() {
    this.items = new Array<UserDictionaryItem>();
  }

  public getItem = (key: string) => {
    const item = this.items.find((item) => item.key == key);
    if (!item) {
      return null;
    }
    return item.data;
  };

  public setItem = (key: string, users: UserViewModel[]) => {
    const hasKey = this.items.findIndex((item) => item.key == key) > -1;
    if (hasKey) {
      return;
    }

    this.items.push({
      key: key,
      data: users ?? [],
    });
  };
}
