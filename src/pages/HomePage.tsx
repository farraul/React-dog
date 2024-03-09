import { useEffect, useState } from "react";
import breedsService from "src/services/breeds";
import { BreedsSelect } from "./components/BreedsSelect";
import ImageGallery from "./components/ImageGallery";

export const HomePage = () => {
  const [breeds, setBreeds] = useState({});
  const [breedSelected, setBreedSelected] = useState("");
  const [images, setImages] = useState([]);
  const { getNameBreeds, getBreedImages } = breedsService();

  const getdata = async () => {
    const { message } = await getNameBreeds();
    setBreeds(message);
  };

  const getImages = async () => {
    const { message } = await getBreedImages(breedSelected);
    setImages(message);
  };

  useEffect(() => {
    if (breedSelected) getImages();
  }, [breedSelected]);

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <BreedsSelect breeds={breeds} setBreedSelected={setBreedSelected} />
      <ImageGallery images={images} />
    </div>
  );
};
