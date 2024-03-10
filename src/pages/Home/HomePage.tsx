import { useEffect, useState } from "react";
import { BreedsSelect, ImageGallery } from "./components";
import { Spinner } from "src/components";
import { useSubmit } from "src/hooks";
import breedsService from "src/services/breedsService";

const HomePage = () => {
  const [breedSelected, setBreedSelected] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);

  const { handleSubmit, isLoading, error } = useSubmit<string, string[]>();
  const { getBreedImages } = breedsService();

  const getImages = async () => {
    if (breedSelected) {
      const imageDogs = await handleSubmit({
        callback: getBreedImages,
        param: breedSelected,
      });
      if (error) return;
      if (imageDogs) setImages(imageDogs);
    }
  };

  useEffect(() => {
    if (breedSelected) getImages();
  }, [breedSelected]);

  return (
    <article className="min-h-screen">
      <section className="px-4 sm:px-20">
        <BreedsSelect setBreedSelected={setBreedSelected} />
        {isLoading ? <Spinner /> : <ImageGallery images={images} />}
      </section>
    </article>
  );
};

export default HomePage;
