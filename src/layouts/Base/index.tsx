import { Layout, Space } from "antd";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Menu } from "@src/components/Menu";

type BaseLayoutProps = {
  children: ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Space direction="vertical" className={styles.container}>
      <Layout>
        <Menu />
        <Layout>
          {/* // TODO Implement filter in the future */}
          {/* <Layout.Header className={styles["ant-layout-header"]}>
            <></>
          </Layout.Header> */}
          <Layout.Content>
            <div className={styles.content}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Space>
  );
};
