import { Asset } from "@src/services/types";
import assetsStore from "@src/store/assets";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import { message } from "antd";
import { makeAutoObservable } from "mobx";

class DetailsController {
  public isModalOpen = false;

  public constructor() {
    makeAutoObservable(this);
  }
  public getUnitById = (id: number) => unitsStore.getUnitById(id)?.name ?? "";
  public getCompanyById = (id: number) =>
    companiesStore.getCompanyById(id)?.name ?? "";

  public setModalVisibility = (bool: boolean) => (this.isModalOpen = bool);

  public onFinish = async (updatedAsset: Asset) => {
    try {
      await assetsStore.updateAsset({
        ...assetsStore.selectedAsset,
        ...updatedAsset,
      });
      message.success("Ativo atualizado com sucesso!");
      this.setModalVisibility(false);
    } catch (error) {
      message.error("Ops! houve uma falha, tente novamente mais tarde!");
    }
  };

  public handleOpenEditModal = (id: number) => {
    assetsStore.setSelectedAsset(id);
    this.setModalVisibility(true);
  };
}

const controller = new DetailsController();
export default controller;
