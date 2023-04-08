import { AssetsList } from "@src/components/AssetsList";
import { useEffect } from "react";
import assetsStore from "@src/store/assets";
import { Typography } from "antd";
import { observer } from "mobx-react-lite";
import userStore from "@src/store/user";

const Assets = () => {
  useEffect(() => {
    assetsStore.fetchAssets();
    userStore.fetchUsers();
  }, []);

  return (
    <div>
      <Typography.Title level={3} style={{ alignSelf: "start" }}>
        Ativos
      </Typography.Title>
      <section>
        <AssetsList assets={assetsStore.assets} />
      </section>
    </div>
  );
};

export default observer(Assets);
