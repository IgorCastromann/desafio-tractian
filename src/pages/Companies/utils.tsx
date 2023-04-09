import { Company } from "@src/services/types";
import { Button, Popconfirm, Space, message } from "antd";
import { ColumnsType } from "antd/es/table";
import controller from "./controller";

export const buildColumns = (): ColumnsType<Company> => [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "",
    key: "action",
    align: "right",
    render: (_, company) => (
      <Space size="small">
        <Button
          type="link"
          onClick={() => controller.handleOpenEditModal(company.id)}
        >
          Editar
        </Button>
        <Popconfirm
          title={`Deseja mesmo deletar a empresa ${company.name}?`}
          description="Uma vez deletada, você não poderá voltar atrás!"
          onConfirm={async () => {
            try {
              await controller.deleteCompany(company.id);
              message.success("Empresa deletada com sucesso!");
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
