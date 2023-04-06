import { AnalysesService } from "@src/services/analyses";
import { User } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import userStore from "@src/store/user";
import { makeAutoObservable } from "mobx";

class UsersController {
  public selectedUser: User | undefined;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchData = () => {
    userStore.fetchUsers();
    companiesStore.fetchCompanies();
    unitsStore.fetchUnits();
  };

  public setSelectedUser = (user: User | undefined) =>
    (this.selectedUser = user);

  public deleteUser = (id: number) => this.analysesService.deleteUser(id);
}

const controller = new UsersController();
export default controller;
