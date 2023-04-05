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

export const trantatedHealthStatus: Record<HealthStatus, string> = {
  inAlert: "Em Alerta",
  inDowntime: "Em Parada",
  inOperation: "Em Operação",
  plannedStop: "Parada Planejada",
  unplannedStop: "Parada Não Planejada",
};
