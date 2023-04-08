import { Table } from "antd";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import controller from "./controller";
import { buildColumns } from "./utils";
import unitsStore from "@src/store/units";

const Units = () => {
  useEffect(() => {
    controller.fetchData();
  }, []);

  return (
    <Table
      columns={buildColumns()}
      dataSource={unitsStore.units}
      rowKey="id"
      style={{ width: "100%", maxWidth: "1400px" }}
    />
  );
};

export default observer(Units);
