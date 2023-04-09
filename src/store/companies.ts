import { AnalysesService } from "@src/services/analyses";
import { Company } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class CompaniesStore {
  public companies: Company[] = [];
  public selectedCompany: Company | undefined;

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

  public setSelectedCompany = (id: number) =>
    (this.selectedCompany = this.companies.find(
      (company) => company.id === id
    ));

  public updateCompany = (company: Company) => {
    if (!this.selectedCompany) return;
    this.analysesService.updateCompany(company.id, company);
  };

  private setCompanies = (companies: Company[]) => {
    this.companies = companies;
  };
}

const companiesStore = new CompaniesStore();
export default companiesStore;
