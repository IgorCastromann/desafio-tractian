import { useEffect } from "react";
import styles from "./styles.module.scss";
import assetsStore from "@src/store/assets";
import { observer } from "mobx-react-lite";

import userStore from "@src/store/user";
import { AssetsLastCollect } from "@src/components/Charts/AssetsLastCollect";
import { AssetsCollects } from "@src/components/Charts/AssetsCollects";
import { AssetsPower } from "@src/components/Charts/AssetsPower";
import { AssetsRPM } from "@src/components/Charts/AssetsRPM";
import { AssetsHealth } from "@src/components/Charts/AssetsHealth";
import { AssetsStatus } from "@src/components/Charts/AssetsStatus";

const Dashboard = observer(() => {
  useEffect(() => {
    assetsStore.fetchAssets();
    userStore.fetchUsers();
  }, []);

  return (
    <section className={styles["section-graphs"]}>
      <AssetsStatus assets={assetsStore.filteredAssets} />
      <AssetsHealth assets={assetsStore.filteredAssets} />
      <AssetsRPM assets={assetsStore.filteredAssets} />
      <AssetsPower assets={assetsStore.filteredAssets} />
      <AssetsCollects assets={assetsStore.filteredAssets} />
      <AssetsLastCollect assets={assetsStore.filteredAssets} />
    </section>
  );
});

export default Dashboard;
