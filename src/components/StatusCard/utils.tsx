import {
  CheckCircleOutlined,
  StopOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Status } from "@src/services/types";
import { BaseType } from "antd/es/typography/Base";
import { ReactNode } from "react";

interface StatusObj {
  title: string;
  icon: ReactNode;
  type: BaseType | undefined;
}
export const infoByStatus: Record<Status, StatusObj> = {
  inAlert: {
    title: "Em Alerta",
    icon: <WarningOutlined />,
    type: "warning",
  },
  inOperation: {
    title: "Em Operação",
    icon: <CheckCircleOutlined />,
    type: "success",
  },
  inDowntime: {
    title: "Em Parada",
    icon: <StopOutlined />,
    type: "danger",
  },
};
