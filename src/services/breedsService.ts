import axios, { AxiosError } from "axios";
import { API_URL_DOGS } from "src/constants/API";
import { DogBreeds } from "src/models";
import { adapterError } from "src/utils";

const breedsService = () => {
  const getNameBreeds = async (): Promise<DogBreeds> => {
    try {
      const { data } = await axios.get(`${API_URL_DOGS}/breeds/list/all`);
      return data.message;
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      throw `Error detected: (${adapterError(err)})`;
    }
  };

  const getBreedImages = async (breed: string): Promise<string[]> => {
    try {
      const { data } = await axios.get(`${API_URL_DOGS}/breed/${breed}/images`);
      return data.message;
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      throw `Error detected: (${adapterError(err)})`;
    }
  };

  return { getNameBreeds, getBreedImages };
};

export default breedsService;
