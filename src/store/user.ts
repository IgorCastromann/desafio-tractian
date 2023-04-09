import { AnalysesService } from "@src/services/analyses";
import { User } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class UserStore {
  public users: User[] = [];
  public selectedUser: User | undefined;

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

  public setSelectedUser = (id: number) =>
    (this.selectedUser = this.users.find((user) => user.id === id));

  public updateUser = (user: User) => {
    if (!this.selectedUser) return;
    this.analysesService.updateUser(user.id, user);
  };

  private setUsers = (users: User[]) => {
    this.users = users;
  };
}

const userStore = new UserStore();
export default userStore;
