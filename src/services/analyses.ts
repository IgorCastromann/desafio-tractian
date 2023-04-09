import { Asset, Company, Unit, User } from "./types";

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

  public updateAsset = async (id: number, asset: Asset) => {
    const response = await fetch(`${BASE_URL}/assets/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ asset }),
    });
    const updatedAsset = await response.json();

    return updatedAsset;
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

  public updateUser = async (id: number, user: User) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ user }),
    });
    const updatedUser = await response.json();

    return updatedUser;
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

  public updateCompany = async (id: number, company: Company) => {
    const response = await fetch(`${BASE_URL}/companies/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ company }),
    });
    const updatedCompanies = await response.json();

    return updatedCompanies;
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

  public updateUnit = async (id: number, unit: Unit) => {
    const response = await fetch(`${BASE_URL}/units/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ unit }),
    });
    const updatedUnit = await response.json();

    return updatedUnit;
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

  public deleteWorkOrder = async (id: number) => {
    const response = await fetch(`${BASE_URL}/workorders/${id}`, {
      method: "DELETE",
    });
    const order = await response.json();

    return order;
  };
}
