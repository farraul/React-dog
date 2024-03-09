import { useEffect, useState } from "react";
import breedsService from "src/services/breeds";
import ImageGallery from "./components/ImageGallery";
import { BreedsSelect } from "./components";
import useSubmit from "src/hooks/useSubmit";
import { DogBreeds } from "src/models/breed";
import { Spinner } from "src/components";

const HomePage = () => {
  const [breedSelected, setBreedSelected] = useState<string>("");
  const [images, setImages] = useState<DogBreeds[]>([]);
  const { handleSubmit, isLoading, error } = useSubmit<string, DogBreeds[]>();
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
