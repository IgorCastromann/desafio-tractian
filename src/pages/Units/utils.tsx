import { Unit } from "@src/services/types";
import companiesStore from "@src/store/companies";
import { Button, Popconfirm, Space, message } from "antd";
import { ColumnsType } from "antd/es/table";
import controller from "./controller";

export const buildColumns = (): ColumnsType<Unit> => [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Empresa",
    dataIndex: "companyId",
    key: "companyId",
    render: (companyId) => (
      <>{companiesStore.getCompanyById(companyId)?.name}</>
    ),
  },
  {
    title: "",
    key: "action",
    align: "right",
    render: (_, unit) => (
      <Space size="small">
        <Button
          type="link"
          onClick={() => controller.handleOpenEditModal(unit.id)}
        >
          Editar
        </Button>
        <Popconfirm
          title={`Deseja mesmo deletar a unidade ${unit.name}?`}
          description="Uma vez deletada, você não poderá voltar atrás!"
          onConfirm={async () => {
            try {
              await controller.deleteUnit(unit.id);
              message.success("Unidade deletada com sucesso!");
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
