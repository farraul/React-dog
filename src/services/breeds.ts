import axios from "axios";
import { API_URL_DOGS } from "src/constants/API";

const breedsService = () => {
  const getBreeds = async () => {
    const { data } = await axios.get(`${API_URL_DOGS}/breeds/list/all`);
    return data;
  };

  return { getBreeds };
};

export default breedsService;
