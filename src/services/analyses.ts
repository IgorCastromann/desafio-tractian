import { Asset } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export class AnalysesService {
  public fetchAssets = async (): Promise<Asset[]> => {
    const response = await fetch(`${BASE_URL}/assets`);
    const assets = await response.json();

    return assets;
  };

  public fetchAssetById = async (id: number): Promise<Asset> => {
    const response = await fetch(`${BASE_URL}/assets/${id}`);
    const asset = await response.json();

    return asset;
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

  public deleteCompany = async (id: number) => {
    const response = await fetch(`${BASE_URL}/companies/${id}`, {
      method: "DELETE",
    });
    const company = await response.json();

    return company;
  };

  public fetchUnits = async () => {
    const response = await fetch(`${BASE_URL}/units`);
    const units = await response.json();

    return units;
  };

  public deleteUnit = async (id: number) => {
    const response = await fetch(`${BASE_URL}/units/${id}`, {
      method: "DELETE",
    });
    const unit = await response.json();

    return unit;
  };

  public fetchWorkOrders = async () => {
    const response = await fetch(`${BASE_URL}/workorders`);
    const workOrders = await response.json();

    return workOrders;
  };
}
