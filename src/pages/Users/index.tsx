import { Table } from "antd";
import userStore from "@src/store/user";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import controller from "./controller";
import { buildColumns } from "./utils";

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
    </>
  );
};

export default observer(Users);
