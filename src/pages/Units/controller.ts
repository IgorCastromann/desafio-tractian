import { AnalysesService } from "@src/services/analyses";
import { Unit } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import { makeAutoObservable } from "mobx";

class UnitsController {
  public selectedUnit: Unit | undefined;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchData = () => {
    unitsStore.fetchUnits();
    companiesStore.fetchCompanies();
  };

  public setSelectedUnit = (unit: Unit | undefined) =>
    (this.selectedUnit = unit);

  public deleteUnit = (id: number) => this.analysesService.deleteUnit(id);
}

const controller = new UnitsController();
export default controller;
