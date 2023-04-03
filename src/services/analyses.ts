import { Active } from "./types";

// TODO move to .env
const BASE_URL = "https://my-json-server.typicode.com/tractian/fake-api";

export class AnalysesService {
  public fetchActives = async (): Promise<Active[]> => {
    const response = await fetch(`${BASE_URL}/assets`);
    const actives = await response.json();

    // TODO remove console.log()
    console.log(actives);
    return actives;
  };
}
