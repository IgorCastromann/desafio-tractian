import { Button, Form, Input, Modal, Select } from "antd";
import companiesStore from "@src/store/companies";
import { User } from "@src/services/types";
import unitsStore from "@src/store/units";

interface UnitsModalProps {
  isModalOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: User) => void;
  onCancel: () => void;
}
export const UnitsModal = ({
  isModalOpen,
  onFinish,
  onCancel,
}: UnitsModalProps) => {
  return (
    <Modal
      title="Editar"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      destroyOnClose
    >
      <UnitsFieldsForm onFinish={onFinish} />
    </Modal>
  );
};
interface UnitsFieldsFormProps {
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: User) => void;
}
const UnitsFieldsForm = ({ onFinish }: UnitsFieldsFormProps) => {
  if (!unitsStore.selectedUnit) return null;
  const { companyId, name } = unitsStore.selectedUnit;
  return (
    <Form
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name,
        companyId,
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

      <Form.Item wrapperCol={{ offset: 18 }}>
        <Button type="primary" htmlType="submit">
          Atualizar
        </Button>
      </Form.Item>
    </Form>
  );
};
