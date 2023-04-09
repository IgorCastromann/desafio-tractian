import { List, Modal, Space, Table, Tag } from "antd";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import controller from "./controller";
import { buildColumns } from "./utils";
import workOrderStore from "@src/store/workOrders";

const WorkOrders = () => {
  useEffect(() => {
    controller.fetchData();
  }, []);

  return (
    <>
      <Table
        columns={buildColumns()}
        dataSource={workOrderStore.workOrders}
        rowKey="id"
        style={{ width: "100%", maxWidth: "1400px" }}
      />
      <Modal
        title="Checkup"
        open={controller.isModalOpen}
        onOk={() => controller.setModalVisibility(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={false}
      >
        <List
          itemLayout="horizontal"
          dataSource={controller.selectedWorkOrder?.checklist}
          renderItem={(item, index) => (
            <Space
              key={index}
              direction="vertical"
              style={{ marginBottom: "0.5rem" }}
            >
              <Space>
                <Tag
                  color={item.completed ? "success" : "blue"}
                  style={{ width: "75px" }}
                >
                  {item.completed ? "Finalizado" : "Pendente"}
                </Tag>
                {item.task}
              </Space>
            </Space>
          )}
        />
      </Modal>
    </>
  );
};

export default observer(WorkOrders);
