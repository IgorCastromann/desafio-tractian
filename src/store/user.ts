import { AnalysesService } from "@src/services/analyses";
import { User } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class UserStore {
  public users: User[] = [];

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchUsers = async () => {
    const users = await this.analysesService.fetchUsers();

    this.setUsers(users);
  };

  public getUserById = (id: number) => {
    return this.users.find((user) => user.id === id);
  };

  private setUsers = (users: User[]) => {
    this.users = users;
  };
}

const userStore = new UserStore();
export default userStore;
