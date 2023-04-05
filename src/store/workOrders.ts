import { AnalysesService } from "@src/services/analyses";
import { WorkOrder } from "@src/services/types";
import { makeAutoObservable } from "mobx";

class WorkOrdersStore {
  public workOrders: WorkOrder[] = [];

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchWorkOrders = async () => {
    const workOrders = await this.analysesService.fetchWorkOrders();

    this.setWorkOrders(workOrders);
  };

  public getWorkOrderById = (id: number) => {
    return this.workOrders.find((order) => order.id === id);
  };

  private setWorkOrders = (order: WorkOrder[]) => {
    this.workOrders = order;
  };
}

const workOrderStore = new WorkOrdersStore();
export default workOrderStore;
