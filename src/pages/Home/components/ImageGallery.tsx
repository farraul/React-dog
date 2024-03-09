import { useState } from "react";
import LazyImage from "src/components/LazyImage";
import PortalModal from "src/components/PortalModal";
import { useModal } from "src/hooks/useModal";

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const { setIsOpenModal, closeModal, isOpenModal } = useModal();
  const [currentImage, setCurrentImage] = useState("");

  const showModal = (urlImage: string) => {
    setCurrentImage(urlImage);
    if (window.innerWidth > 770) setIsOpenModal("openImage");
  };

  return (
    <>
      {images.length ? (
        <div className="image-container grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-5 sm:mt-20">
          {images.map((image, index) => (
            <div onClick={() => showModal(image)}>
              <LazyImage key={index} src={image as unknown as string} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300 text-2xl mt-36">
          No hay raza seleccionada
        </p>
      )}
      <PortalModal
        close={closeModal}
        typeModal="openImage"
        isOpen={isOpenModal}
        className={"bg-slate-200 max-w-xl"}
      >
        <img src={currentImage} alt={currentImage} className="w-full" />
      </PortalModal>
      ;
    </>
  );
};

export default ImageGallery;
