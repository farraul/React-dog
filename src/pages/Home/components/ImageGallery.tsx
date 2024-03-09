import LazyImage from "src/components/LazyImage";
import { DogBreeds } from "src/models/breed";

interface Props {
  images: DogBreeds[];
}

const ImageGallery = ({ images }: Props) => {
  return (
    <div className="image-container grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-5 sm:mt-20">
      {images.map((image, index) => (
        <LazyImage key={index} src={image as unknown as string} />
      ))}
    </div>
  );
};

export default ImageGallery;
