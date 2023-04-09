import { AnalysesService } from "@src/services/analyses";
import { Unit } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import { message } from "antd";
import { makeAutoObservable } from "mobx";

class UnitsController {
  public isModalOpen = false;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchData = () => {
    unitsStore.fetchUnits();
    companiesStore.fetchCompanies();
  };

  public deleteUnit = (id: number) => this.analysesService.deleteUnit(id);

  public onFinish = async (updatedUnit: Unit) => {
    try {
      await unitsStore.updateUnit({
        ...unitsStore.selectedUnit,
        ...updatedUnit,
      });
      message.success("Unidade atualizada com sucesso!");
      this.setModalVisibility(false);
    } catch (error) {
      message.error("Ops! houve uma falha, tente novamente mais tarde!");
    }
  };

  public handleOpenEditModal = (id: number) => {
    unitsStore.setSelectedUnit(id);
    this.setModalVisibility(true);
  };

  public setModalVisibility = (bool: boolean) => (this.isModalOpen = bool);
}

const controller = new UnitsController();
export default controller;
