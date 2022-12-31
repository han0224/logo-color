import { Data } from "assets/Data";

export default function filterColor(checkItem) {
  if (checkItem.size === 0) {
    return Data;
  }
  const tmp = [];
  for (let item of Data) {
    if (item.list.some((v) => checkItem.has(v.color))) {
      tmp.push(item);
    }
  }
  return tmp;
}
