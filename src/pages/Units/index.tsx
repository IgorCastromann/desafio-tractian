import { Table } from "antd";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import controller from "./controller";
import { buildColumns } from "./utils";
import unitsStore from "@src/store/units";
import { UnitsModal } from "@src/components/Modals/Units";

const Units = () => {
  useEffect(() => {
    controller.fetchData();
  }, []);

  return (
    <>
      <Table
        columns={buildColumns()}
        dataSource={unitsStore.units}
        rowKey="id"
        style={{ width: "100%", maxWidth: "1400px" }}
      />
      <UnitsModal
        isModalOpen={controller.isModalOpen}
        onCancel={() => controller.setModalVisibility(false)}
        onFinish={controller.onFinish}
      />
    </>
  );
};

export default observer(Units);
