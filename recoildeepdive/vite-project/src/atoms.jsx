import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 4,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 10,
});

export const notifyAtom = atom({
  key: "notifyAtom",
  default: 69,
});

export const allValuesSelector = selector({
  key: "allValuesSelector",
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const notifyCount = get(notifyAtom);
    return networkCount + jobsCount + notifyCount;
  },
});
