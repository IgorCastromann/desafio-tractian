import { Asset } from "./types";

// TODO move to .env
const BASE_URL = "https://my-json-server.typicode.com/tractian/fake-api";

export class AnalysesService {
  public fetchAssets = async (): Promise<Asset[]> => {
    const response = await fetch(`${BASE_URL}/assets`);
    const assets = await response.json();

    return assets;
  };

  public fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const users = await response.json();

    return users;
  };

  public fetchUserById = async (id: number) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    const user = await response.json();

    return user;
  };

  public deleteUser = async (id: number) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
    const user = await response.json();

    return user;
  };

  public fetchCompanies = async () => {
    const response = await fetch(`${BASE_URL}/companies`);
    const companies = await response.json();

    return companies;
  };

  public fetchUnits = async () => {
    const response = await fetch(`${BASE_URL}/units`);
    const units = await response.json();

    return units;
  };

  public fetchWorkOrders = async () => {
    const response = await fetch(`${BASE_URL}/workorders`);
    const workOrders = await response.json();

    return workOrders;
  };
}
