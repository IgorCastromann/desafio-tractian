import { Button, Result } from "antd";
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

export const ErrorFallback = () => {
  const { resetBoundary } = useErrorBoundary();
  return (
    <Result
      status="404"
      title="Ops, algo deu errado!"
      subTitle="Para tentar novamente, clique em voltar para o início."
      extra={
        <Link to="/">
          <Button type="primary" onClick={resetBoundary}>
            Voltar para o início
          </Button>
        </Link>
      }
    />
  );
};
