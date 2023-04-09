import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";

class DetailsController {
  public getUnitById = (id: number) => unitsStore.getUnitById(id)?.name ?? "";
  public getCompanyById = (id: number) =>
    companiesStore.getCompanyById(id)?.name ?? "";
}

const controller = new DetailsController();
export default controller;
