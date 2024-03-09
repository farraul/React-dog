import LazyImage from "src/components/LazyImage";
import { DogBreeds } from "src/models/breed";

interface Props {
  images: DogBreeds[];
}

const ImageGallery = ({ images }: Props) => {
  if (images.length) {
    return (
      <div className="image-container grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-5 sm:mt-20">
        {images.map((image, index) => (
          <LazyImage key={index} src={image as unknown as string} />
        ))}
      </div>
    );
  } else {
    return (
      <p className="text-center text-gray-300 text-2xl mt-36">
        No hay raza seleccionada
      </p>
    );
  }
};

export default ImageGallery;
