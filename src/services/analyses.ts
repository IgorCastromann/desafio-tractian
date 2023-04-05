import { Active } from "./types";

// TODO move to .env
const BASE_URL = "https://my-json-server.typicode.com/tractian/fake-api";

export class AnalysesService {
  public fetchActives = async (): Promise<Active[]> => {
    const response = await fetch(`${BASE_URL}/assets`);
    const actives = await response.json();

    return actives;
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
}
