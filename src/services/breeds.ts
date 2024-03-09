import axios from "axios";
import { API_URL_DOGS } from "src/constants/API";

const breedsService = () => {
  const getNameBreeds = async () => {
    const { data } = await axios.get(`${API_URL_DOGS}/breeds/list/all`);
    return data;
  };

  const getBreedImages = async (breed: string) => {
    const { data } = await axios.get(`${API_URL_DOGS}/breed/${breed}/images`);
    return data;
  };

  return { getNameBreeds, getBreedImages };
};

export default breedsService;
