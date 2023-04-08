import { Space } from "antd";
import { ReactNode } from "react";

export const IconText = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string | number;
}) => (
  <Space>
    {icon}
    {text}
  </Space>
);
