import { ToastPosition, Theme } from "react-toastify";

interface Option {
  position: ToastPosition;
  autoClose: number | false | undefined;
  hideProgressBar: boolean | undefined;
  closeOnClick: boolean | undefined;
  pauseOnHover: boolean | undefined;
  draggable: boolean | "mouse" | "touch" | undefined;
  progress: string | number | undefined;
  theme: Theme;
}

export const optionToast: Option = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
