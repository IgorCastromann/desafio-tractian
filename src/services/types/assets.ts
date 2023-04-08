export interface Asset {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: HealthHistory[];
  healthscore: number;
  id: number;
  image: string;
  metrics: Metrics;
  model: string;
  name: string;
  sensors: string[];
  specifications: Specifications;
  status: Status;
  unitId: number;
}

export interface HealthHistory {
  status: HealthStatus;
  timestamp: string;
}

export interface Metrics {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export interface Specifications {
  maxTemp: number;
  power?: number;
  rpm?: number;
}

export type Status = "inAlert" | "inOperation" | "inDowntime";

export type HealthStatus = Status | "plannedStop" | "unplannedStop";

export const translatedHealthStatus: Record<HealthStatus, string> = {
  inAlert: "Em Alerta",
  unplannedStop: "Parada Não Planejada",
  inOperation: "Em Operação",
  plannedStop: "Parada Planejada",
  inDowntime: "Em Parada",
};

export const healthStatusColor: Record<HealthStatus, string> = {
  inAlert: "#faad14",
  unplannedStop: "#fa0202",
  inOperation: "#52c41a",
  plannedStop: "#3495eb",
  inDowntime: "#FF4D4F",
};

export const healthStatusChartValue: Record<HealthStatus, number> = {
  inAlert: 4.5,
  unplannedStop: 3.5,
  inOperation: 2.5,
  plannedStop: 1.5,
  inDowntime: 0.5,
};
