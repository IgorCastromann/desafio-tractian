import { Layout, Space, Typography } from "antd";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Menu } from "@src/components/Menu";
import controller from "./controller";
import { useLocation } from "react-router-dom";

type BaseLayoutProps = {
  children: ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const location = useLocation();

  return (
    <Space direction="vertical" className={styles.container}>
      <Layout>
        <Menu />
        <Layout>
          <Layout.Header className={styles["ant-layout-header"]}>
            <Typography.Title level={4} style={{ color: "white" }}>
              {controller.getTitleByPathUrl(location.pathname)}
            </Typography.Title>
          </Layout.Header>
          <Layout.Content>
            <div className={styles.content}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Space>
  );
};
