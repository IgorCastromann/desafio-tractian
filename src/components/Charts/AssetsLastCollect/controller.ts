import { formattDateDiffToString, getDateDiff } from "@src/utils/date";

class AssetsLastCollectController {
  public formatDate = (stringDate: string) =>
    formattDateDiffToString(getDateDiff(new Date(stringDate)));
}

const controller = new AssetsLastCollectController();
export default controller;
