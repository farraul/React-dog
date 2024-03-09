import { AxiosError } from "axios";

export const adapterError = (arr: AxiosError) => {
  return Object.values(arr.response?.data as []);
};
