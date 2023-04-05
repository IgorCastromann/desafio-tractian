import { AnalysesService } from "@src/services/analyses";
import { Unit } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class UnitsStore {
  public units: Unit[] = [];

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchUnits = async () => {
    const units = await this.analysesService.fetchUnits();

    this.setUnits(units);
  };

  public getUnitById = (id: number) => {
    return this.units.find((unit) => unit.id === id);
  };

  private setUnits = (units: Unit[]) => {
    this.units = units;
  };
}

const unitsStore = new UnitsStore();
export default unitsStore;
