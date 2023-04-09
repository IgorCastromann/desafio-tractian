import { User } from "@src/services/types";
import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import { Button, Popconfirm, Space, message } from "antd";
import { ColumnsType } from "antd/es/table";
import controller from "./controller";

export const buildColumns = (): ColumnsType<User> => [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Unidade",
    dataIndex: "unitId",
    key: "unitId",
    render: (unitId) => <>{unitsStore.getUnitById(unitId)?.name}</>,
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
    render: (_, user) => (
      <Space size="small">
        <Button
          type="link"
          onClick={() => controller.handleOpenEditModal(user.id)}
        >
          Editar
        </Button>
        <Popconfirm
          title={`Deseja mesmo deletar o usuário ${user.name}?`}
          description="Uma vez deletado, você não poderá voltar atrás!"
          onConfirm={async () => {
            try {
              await controller.deleteUser(user.id);
              message.success("Usuário deletado com sucesso!");
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
