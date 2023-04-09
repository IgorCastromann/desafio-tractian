import { Image, Layout, List, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import TractianLogo from "@src/assets/logo-tractian.svg";

const data = [
  {
    to: "/",
    text: "Dashboard",
  },
  {
    to: "/assets",
    text: "Ativos",
  },
  {
    to: "/units",
    text: "Unidades",
  },
  {
    to: "/companies",
    text: "Empresas",
  },
  {
    to: "/users",
    text: "Usuários",
  },
  {
    to: "/workorders",
    text: "Ordens de serviço",
  },
];
export const Menu = () => {
  return (
    <Layout.Sider width={264} className={styles.sidebar}>
      <div className={styles["sidebar__content"]}>
        <header>
          <nav className={styles.nav}>
            <Link to="/">
              <Image
                width={160}
                height={50}
                src={TractianLogo}
                alt="Logo Tractian"
                preview={false}
              />
            </Link>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, idx) => (
                <List.Item key={idx} className={styles.list}>
                  <Link to={item.to}>
                    <Typography.Text className={styles["list__text"]}>
                      {" "}
                      {item.text}
                    </Typography.Text>
                  </Link>
                </List.Item>
              )}
            />

            {/* // TODO use or discart imgs */}
            {/* <section>
              <div className={styles.images}>
                <Image
                  width={70}
                  height={70}
                  alt="Ativos"
                  src={
                    "https://imgix.tractian.com/images/icon-maintence-pump.svg?auto=format&fit=max&w=256"
                  }
                  preview={false}
                />
                <Image
                  width={70}
                  height={70}
                  alt="Unidades"
                  src={
                    "https://imgix.tractian.com/images/icon-maintence-online.svg?auto=format&fit=max&w=256"
                  }
                  preview={false}
                />
                <Image
                  width={70}
                  height={70}
                  alt="Empresas"
                  src={
                    "https://imgix.tractian.com/images/icon-maintence-horimeter.svg?auto=format&fit=max&w=256"
                  }
                  preview={false}
                />
                <Image
                  width={70}
                  height={70}
                  alt="Usuários"
                  src={
                    "https://imgix.tractian.com/images/icon-maintence-plataform.svg?auto=format&fit=max&w=256"
                  }
                  preview={false}
                />
              </div>
            </section> */}
          </nav>
        </header>
      </div>
    </Layout.Sider>
  );
};
