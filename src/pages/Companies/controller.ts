import { AnalysesService } from "@src/services/analyses";
import { Company } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import userStore from "@src/store/user";
import { makeAutoObservable } from "mobx";

class CompaniesController {
  public selectedCompany: Company | undefined;

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
}

const controller = new CompaniesController();
export default controller;
