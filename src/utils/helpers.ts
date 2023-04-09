import userStore from "@src/store/user";

export const joinUserNames = (ids: number[]) => {
  const names: string[] = [];
  ids.map((id) => {
    const user = userStore.getUserById(id);
    if (!user) return;
    names.push(user.name);
  });
  return names.join(", ");
};
