import { Table } from "antd";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import controller from "./controller";
import { buildColumns } from "./utils";
import companiesStore from "@src/store/companies";
import { CompanyModal } from "@src/components/Modals/Company";

const Companies = () => {
  useEffect(() => {
    controller.fetchData();
  }, []);

  return (
    <>
      <Table
        columns={buildColumns()}
        dataSource={companiesStore.companies}
        rowKey="id"
        style={{ width: "100%", maxWidth: "1400px" }}
      />
      <CompanyModal
        isModalOpen={controller.isModalOpen}
        onCancel={() => controller.setModalVisibility(false)}
        onFinish={controller.onFinish}
      />
    </>
  );
};

export default observer(Companies);
