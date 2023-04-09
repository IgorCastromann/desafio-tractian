import { Button, Form, Input, Modal, Select } from "antd";
import assetsStore from "@src/store/assets";
import companiesStore from "@src/store/companies";
import {
  Asset,
  HealthStatus,
  translatedHealthStatus,
} from "@src/services/types";
import unitsStore from "@src/store/units";

interface AssetsModalProps {
  isModalOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: Asset) => void;
  onCancel: () => void;
}
export const AssetsModal = ({
  isModalOpen,
  onFinish,
  onCancel,
}: AssetsModalProps) => {
  return (
    <Modal
      title="Editar"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <AssetsFieldsForm onFinish={onFinish} />
    </Modal>
  );
};
interface AssetsFieldsFormProps {
  // eslint-disable-next-line no-unused-vars
  onFinish: (value: Asset) => void;
}
const AssetsFieldsForm = ({ onFinish }: AssetsFieldsFormProps) => {
  if (!assetsStore.selectedAsset) return null;
  const { image, companyId, healthscore, name, model, status, unitId } =
    assetsStore.selectedAsset;
  return (
    <Form
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        companyId,
        unitId,
        healthscore,
        image,
        name,
        model,
        status,
      }}
    >
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

      <Form.Item
        label="Saúde do ativo"
        name="healthscore"
        rules={[
          { required: true, message: "Este campo não pode ficar em branco!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Imagem"
        name="image"
        rules={[
          { required: true, message: "Este campo não pode ficar em branco!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Modelo"
        name="model"
        rules={[
          { required: true, message: "Este campo não pode ficar em branco!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nome"
        name="name"
        rules={[
          { required: true, message: "Este campo não pode ficar em branco!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Status" name="status">
        <Select
          options={[
            ...Object.keys(translatedHealthStatus).map((val) => ({
              value: val,
              label: translatedHealthStatus[val as HealthStatus],
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
