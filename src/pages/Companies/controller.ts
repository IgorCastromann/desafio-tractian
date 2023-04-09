import { AnalysesService } from "@src/services/analyses";
import { Company } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import userStore from "@src/store/user";
import { message } from "antd";
import { makeAutoObservable } from "mobx";

class CompaniesController {
  public selectedCompany: Company | undefined;
  public isModalOpen = false;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchData = () => {
    unitsStore.fetchUnits();
    companiesStore.fetchCompanies();
    userStore.fetchUsers();
  };

  public setSelectedCompany = (company: Company | undefined) =>
    (this.selectedCompany = company);

  public deleteCompany = (id: number) => this.analysesService.deleteCompany(id);

  public onFinish = async (updatedCompany: Company) => {
    try {
      await companiesStore.updateCompany({
        ...companiesStore.selectedCompany,
        ...updatedCompany,
      });
      message.success("Empresa atualizada com sucesso!");
      this.setModalVisibility(false);
    } catch (error) {
      message.error("Ops! houve uma falha, tente novamente mais tarde!");
    }
  };

  public handleOpenEditModal = (id: number) => {
    companiesStore.setSelectedCompany(id);
    this.setModalVisibility(true);
  };

  public setModalVisibility = (bool: boolean) => (this.isModalOpen = bool);
}

const controller = new CompaniesController();
export default controller;
