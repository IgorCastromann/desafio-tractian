import { Status } from "@src/services/types";

export interface WorkOrder {
  assetId: number;
  assignedUserIds: number[];
  checklist: Checklist[];
  description: string;
  id: number;
  priority: string;
  status: Status;
  title: string;
}

export interface Checklist {
  completed: boolean;
  task: string;
}
