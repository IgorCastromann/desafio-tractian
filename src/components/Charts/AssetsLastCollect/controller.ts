import userStore from "@src/store/user";
import { formattDateDiffToString, getDateDiff } from "@src/utils/date";

class AssetsLastCollectController {
  public joinUserNames = (ids: number[]) => {
    const names: string[] = [];
    ids.map((id) => {
      const user = userStore.getUserById(id);
      if (!user) return;
      names.push(user.name);
    });
    return names.join(", ");
  };

  public formatDate = (stringDate: string) =>
    formattDateDiffToString(getDateDiff(new Date(stringDate)));
}

const controller = new AssetsLastCollectController();
export default controller;
