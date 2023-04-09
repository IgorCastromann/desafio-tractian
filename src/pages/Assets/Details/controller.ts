import { Asset } from "@src/services/types";
import assetsStore from "@src/store/assets";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
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

  public onFinish = (updatedAsset: Asset) => {
    console.log({ selected: assetsStore.selectedAsset, updatedAsset });
    assetsStore.updateAsset({ ...assetsStore.selectedAsset, ...updatedAsset });
  };

  public handleOpenEditModal = (id: number) => {
    assetsStore.setSelectedAsset(id);
    this.setModalVisibility(true);
  };
}

const controller = new DetailsController();
export default controller;
