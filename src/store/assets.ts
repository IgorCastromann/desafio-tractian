import { AnalysesService } from "@src/services/analyses";
import { Asset, Status } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class AssetsStore {
  public assets: Asset[] = [];
  public filterByStatus: Status | undefined;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchAssets = async () => {
    const assets = await this.analysesService.fetchAssets();

    this.setAssets(assets);
  };

  public getTotalByStatus = (status: Status) => {
    const totalByStatus = this.assets.filter(
      (asset) => asset.status === status
    ).length;

    return totalByStatus;
  };

  public setFilter = (status: Status | undefined) => {
    console.log("clickou", status);
    this.filterByStatus = status;
  };

  public get filteredAssets() {
    return this.filterByStatus
      ? this.assets.filter(({ status }) => status === this.filterByStatus)
      : this.assets;
  }

  private setAssets = (assets: Asset[]) => {
    this.assets = assets;
  };
}

const assetsStore = new AssetsStore();
export default assetsStore;
