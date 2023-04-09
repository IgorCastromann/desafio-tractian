import { AnalysesService } from "@src/services/analyses";
import { WorkOrder } from "@src/services/types";
import assetsStore from "@src/store/assets";
import companiesStore from "@src/store/companies";
import userStore from "@src/store/user";
import workOrderStore from "@src/store/workOrders";
import { makeAutoObservable } from "mobx";

class WorkOrdersController {
  public selectedWorkOrder: WorkOrder | undefined;
  public isModalOpen = false;

  // eslint-disable-next-line no-unused-vars
  public constructor(private analysesService = new AnalysesService()) {
    makeAutoObservable(this);
  }

  public fetchData = () => {
    assetsStore.fetchAssets();
    userStore.fetchUsers();
    companiesStore.fetchCompanies();
    workOrderStore.fetchWorkOrders();
  };

  public setSelectedUser = (order: WorkOrder | undefined) =>
    (this.selectedWorkOrder = order);

  public deleteWorkOrder = (id: number) =>
    this.analysesService.deleteWorkOrder(id);

  public handleOpenModal = (id: number) => {
    this.selectedWorkOrder = workOrderStore.workOrders.find(
      (order) => order.id === id
    );
    this.setModalVisibility(true);
  };

  public setModalVisibility = (bool: boolean) => (this.isModalOpen = bool);
}

const controller = new WorkOrdersController();
export default controller;
