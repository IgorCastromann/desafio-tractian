import { Table } from "antd";
import userStore from "@src/store/user";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import controller from "./controller";
import { buildColumns } from "./utils";
import { UsersModal } from "@src/components/Modals/Users";

const Users = () => {
  useEffect(() => {
    controller.fetchData();
  }, []);

  return (
    <>
      <Table
        columns={buildColumns()}
        dataSource={userStore.users}
        rowKey="email"
        style={{ width: "100%", maxWidth: "1400px" }}
      />
      <UsersModal
        isModalOpen={controller.isModalOpen}
        onCancel={() => controller.setModalVisibility(false)}
        onFinish={controller.onFinish}
      />
    </>
  );
};

export default observer(Users);
