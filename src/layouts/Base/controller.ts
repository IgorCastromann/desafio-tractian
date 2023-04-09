class BaseController {
  public getTitleByPathUrl = (path: string) => {
    return pathTitle[path as keyof typeof pathTitle];
  };
}

const controller = new BaseController();
export default controller;

const pathTitle = {
  "/": "Dashboard",
  "/assets": "Ativos",
  "/units": "Unidades",
  "/companies": "Empresas",
  "/users": "Usuários",
  "/workorders": "Ordens de serviço",
};
