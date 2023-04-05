import { AnalysesService } from "@src/services/analyses";
import { Company } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class CompaniesStore {
  public companies: Company[] = [];

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchCompanies = async () => {
    const companies = await this.analysesService.fetchCompanies();

    this.setCompanies(companies);
  };

  public getCompanyById = (id: number) => {
    return this.companies.find((company) => company.id === id);
  };

  private setCompanies = (companies: Company[]) => {
    this.companies = companies;
  };
}

const companiesStore = new CompaniesStore();
export default companiesStore;
