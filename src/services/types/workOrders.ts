export interface WorkOrder {
  assetId: number;
  assignedUserIds: number[];
  checklist: Checklist[];
  description: string;
  id: number;
  priority: Priority;
  status: OrderStatus;
  title: string;
}

export interface Checklist {
  completed: boolean;
  task: string;
}

export type Priority = "high" | "medium" | "low";

export type OrderStatus = "completed" | "in progress";
