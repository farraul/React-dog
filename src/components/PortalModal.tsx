import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { typeModalOpen } from "src/models/modals";

createPortal;

interface ModalProps {
  close: () => void;
  isOpen: typeModalOpen;
  typeModal: typeModalOpen;
  className: string;
  children: ReactNode;
}

const PortalModal = ({
  close,
  isOpen,
  className,
  children,
  typeModal,
}: ModalProps) => {
  return createPortal(
    <>
      <div
        onClick={close}
        className={`${
          isOpen === typeModal ? "" : "hidden"
        } cursor-pointer mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[102] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900 opacity-90`}
      ></div>
      <div
        id="productModal"
        className={`${
          isOpen === typeModal ? "flex" : "hidden"
        } mx-auto overflow-y-auto overflow-x-hidden fixed z-[103] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full opacity-100`}
      >
        <div
          className={`${className} relative shadow rounded-lg p-8 w-full max-h-full z-[104]`}
        >
          <div className="flex justify-between items-center rounded-t border-b  dark:border-gray-600">
            <button
              type="button"
              onClick={close}
              className="w-8 h-8 p-2 flex justify-center items-center bg-white rounded-sm right-10 top-10  text-2xl absolute cursor-pointer gap-4 z-[105] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  ml-auto dark:hover:bg-gray-600 dark:hover:text-white"
            >
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default PortalModal;
