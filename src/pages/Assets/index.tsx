import { AssetsList } from "@src/components/AssetsList";
import { useEffect } from "react";
import assetsStore from "@src/store/assets";
import { observer } from "mobx-react-lite";
import userStore from "@src/store/user";

const Assets = () => {
  useEffect(() => {
    assetsStore.fetchAssets();
    userStore.fetchUsers();
  }, []);

  return (
    <section>
      <AssetsList assets={assetsStore.assets} />
    </section>
  );
};

export default observer(Assets);
