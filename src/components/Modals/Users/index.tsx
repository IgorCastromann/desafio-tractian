import { Button, Form, Input, Modal, Select } from "antd";
import companiesStore from "@src/store/companies";
import { User } from "@src/services/types";
import unitsStore from "@src/store/units";
import userStore from "@src/store/user";

interface UsersProps {
  isModalOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: User) => void;
  onCancel: () => void;
}
export const UsersModal = ({ isModalOpen, onFinish, onCancel }: UsersProps) => {
  return (
    <Modal
      title="Editar"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      destroyOnClose
    >
      <UsersFieldsForm onFinish={onFinish} />
    </Modal>
  );
};
interface UsersFieldsFormProps {
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: User) => void;
}
const UsersFieldsForm = ({ onFinish }: UsersFieldsFormProps) => {
  if (!userStore.selectedUser) return null;
  const { companyId, email, name, unitId } = userStore.selectedUser;
  return (
    <Form
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name,
        email,
        companyId,
        unitId,
      }}
    >
      <Form.Item
        label="Nome"
        name="name"
        rules={[
          { required: true, message: "Este campo não pode ficar em branco!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: "Este campo não pode ficar em branco!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Empresa" name="companyId">
        <Select
          options={[
            ...companiesStore.companies.map(({ id, name }) => ({
              value: id,
              label: name,
            })),
          ]}
        />
      </Form.Item>

      <Form.Item label="Unidade" name="unitId">
        <Select
          options={[
            ...unitsStore.units.map(({ id, name }) => ({
              value: id,
              label: name,
            })),
          ]}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 18 }}>
        <Button type="primary" htmlType="submit">
          Atualizar
        </Button>
      </Form.Item>
    </Form>
  );
};
