import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import userStore from "@src/store/user";

class DetailsController {
  public joinUserNames = (ids: number[]) => {
    const names: string[] = [];
    ids.map((id) => {
      const user = userStore.getUserById(id);
      if (!user) return;
      names.push(user.name);
    });
    return names.join(", ");
  };

  public getUnitById = (id: number) => unitsStore.getUnitById(id)?.name ?? "";
  public getCompanyById = (id: number) =>
    companiesStore.getCompanyById(id)?.name ?? "";
}

const controller = new DetailsController();
export default controller;
