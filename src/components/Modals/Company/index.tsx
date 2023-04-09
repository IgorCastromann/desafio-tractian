import { Button, Form, Input, Modal } from "antd";
import companiesStore from "@src/store/companies";
import { User } from "@src/services/types";

interface CompanyModalProps {
  isModalOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: User) => void;
  onCancel: () => void;
}
export const CompanyModal = ({
  isModalOpen,
  onFinish,
  onCancel,
}: CompanyModalProps) => {
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
interface CompanyFieldsFormProps {
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: User) => void;
}
const UnitsFieldsForm = ({ onFinish }: CompanyFieldsFormProps) => {
  if (!companiesStore.selectedCompany) return null;
  const { name } = companiesStore.selectedCompany;
  return (
    <Form
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name,
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

      <Form.Item wrapperCol={{ offset: 18 }}>
        <Button type="primary" htmlType="submit">
          Atualizar
        </Button>
      </Form.Item>
    </Form>
  );
};
