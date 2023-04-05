import { useEffect } from "react";
import styles from "./styles.module.scss";
import activesStore from "@src/store/actives";
import { observer } from "mobx-react-lite";

import { Typography } from "antd";
import userStore from "@src/store/user";
import { ActivesLastCollect } from "@src/components/Charts/ActivesLastCollect";
import { ActivesCollects } from "@src/components/Charts/ActivesCollects";
import { ActivesPower } from "@src/components/Charts/ActivesPower";
import { ActivesRPM } from "@src/components/Charts/ActivesRPM";
import { ActivesHealth } from "@src/components/Charts/ActivesHealth";
import { ActivesStatus } from "@src/components/Charts/ActivesStatus";

export const Dashboard = observer(() => {
  useEffect(() => {
    activesStore.fetchActives();
    userStore.fetchUsers();
  }, []);

  return (
    <>
      <Typography.Title level={3} style={{ alignSelf: "start" }}>
        Dashboard
      </Typography.Title>

      <section className={styles["section-graphs"]}>
        <ActivesStatus actives={activesStore.actives} />
        <ActivesHealth actives={activesStore.actives} />
        <ActivesRPM actives={activesStore.actives} />
        <ActivesPower actives={activesStore.actives} />
        <ActivesCollects actives={activesStore.actives} />
        <ActivesLastCollect actives={activesStore.actives} />
      </section>
    </>
  );
});
