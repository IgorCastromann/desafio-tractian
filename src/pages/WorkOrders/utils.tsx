import { OrderStatus, Priority, WorkOrder } from "@src/services/types";

import { Button, Popconfirm, Space, Tag, message } from "antd";
import { ColumnsType } from "antd/es/table";
import controller from "./controller";
import assetsStore from "@src/store/assets";
import { joinUserNames } from "@src/utils/helpers";

export const buildColumns = (): ColumnsType<WorkOrder> => [
  {
    title: "Título",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Descrição",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Prioridade",
    dataIndex: "priority",
    key: "priority",
    render: (priority) => (
      <Tag color={priorityColors[priority as Priority]}>{priority}</Tag>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={orderStatusColors[status as OrderStatus]}>{status}</Tag>
    ),
  },
  {
    title: "Ativo",
    dataIndex: "assetId",
    key: "assetId",
    render: (assetId) => <>{assetsStore.getAssetById(assetId)?.name}</>,
  },
  {
    title: "Responsáveis",
    dataIndex: "assignedUserIds",
    key: "assignedUserIds",
    render: (userIds) => <>{joinUserNames(userIds)}</>,
  },
  {
    title: "",
    key: "action",
    align: "right",
    render: (_, order) => (
      <Space size="small">
        <Button onClick={() => controller.handleOpenModal(order.id)}>
          info
        </Button>
        <Popconfirm
          title={`Deseja mesmo deletar a ordem de serviço ${order.title}?`}
          description="Uma vez deletada, você não poderá voltar atrás!"
          onConfirm={async () => {
            try {
              await controller.deleteWorkOrder(order.id);
              message.success("Ordem de serviço deletada com sucesso!");
            } catch (error) {
              message.error(
                "Ops! houve uma falha, tente novamente mais tarde!"
              );
            }
          }}
          okText="Deletar"
          cancelText="Cancelar"
          placement="left"
        >
          <Button type="link">Deletar</Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const priorityColors: Record<Priority, string> = {
  high: "error",
  medium: "warning",
  low: "success",
};

const orderStatusColors: Record<OrderStatus, string> = {
  completed: "success",
  "in progress": "blue",
};
