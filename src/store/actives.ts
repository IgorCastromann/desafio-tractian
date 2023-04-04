import { AnalysesService } from "@src/services/analyses";
import { Active, Status } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class ActivesStore {
  public actives: Active[] = [];

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchActives = async () => {
    const actives = await this.analysesService.fetchActives();

    this.setActives(actives);
  };

  public getTotalByStatus = (status: Status) => {
    const totalByStatus = this.actives.filter(
      (active) => active.status === status
    ).length;

    return totalByStatus;
  };

  private setActives = (actives: Active[]) => {
    this.actives = actives;
  };
}

const activesStore = new ActivesStore();
export default activesStore;
