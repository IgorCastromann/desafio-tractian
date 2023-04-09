import { AnalysesService } from "@src/services/analyses";
import { User } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import userStore from "@src/store/user";
import { message } from "antd";
import { makeAutoObservable } from "mobx";

class UsersController {
  public isModalOpen = false;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchData = () => {
    userStore.fetchUsers();
    companiesStore.fetchCompanies();
    unitsStore.fetchUnits();
  };

  public deleteUser = (id: number) => this.analysesService.deleteUser(id);

  public onFinish = async (updatedUser: User) => {
    try {
      await userStore.updateUser({ ...userStore.selectedUser, ...updatedUser });
      message.success("Usuário atualizado com sucesso!");
      this.setModalVisibility(false);
    } catch (error) {
      message.error("Ops! houve uma falha, tente novamente mais tarde!");
    }
  };

  public handleOpenEditModal = (id: number) => {
    userStore.setSelectedUser(id);
    this.setModalVisibility(true);
  };

  public setModalVisibility = (bool: boolean) => (this.isModalOpen = bool);
}

const controller = new UsersController();
export default controller;
