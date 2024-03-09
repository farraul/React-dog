import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useSubmit from "src/hooks/useSubmit";
import { DogBreeds } from "src/models/breed";
import breedsService from "src/services/breeds";

interface Props {
  setBreedSelected: (Breed: string) => void;
}

const BreedsSelect = ({ setBreedSelected }: Props) => {
  const [breeds, setBreeds] = useState<DogBreeds>({});
  const [subBreeds, setSubBreeds] = useState([""]);
  const [shouldRenderSelect, setShouldRenderSelect] = useState(false);
  const [mainBreed, setMainBreed] = useState("");

  const { getNameBreeds } = breedsService();
  const { handleSubmit, isLoading, error } = useSubmit<undefined, DogBreeds>();

  const getdata = async () => {
    const nameDogs = await handleSubmit({
      param: undefined,
      callback: getNameBreeds,
    });
    if (error) return;
    if (nameDogs) setBreeds(nameDogs);
    return nameDogs;
  };

  useQuery({
    queryKey: ["SelectData"],
    queryFn: async () => await getdata(),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });

  const getOptions = () => {
    if (breeds) return [...Object.entries(breeds).map((x) => x[0])];
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (breeds[value].length > 0) {
      setSubBreeds([...breeds[value]]);
      setShouldRenderSelect(true);
    } else {
      setSubBreeds([]);
      setShouldRenderSelect(false);
    }
    setBreedSelected(value);
    setMainBreed(value);
  };

  const onSubSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setBreedSelected(`${mainBreed}/${value}`);
  };

  return (
    <div className="w-full py-4 flex justify-center gap-2 text-lg">
      <select
        onChange={onSelectChange}
        className="select-breeds"
        defaultValue=""
        disabled={isLoading}
      >
        <option value="" disabled>
          Raza
        </option>
        {getOptions()?.map((breed) => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>

      <select
        onChange={onSubSelectChange}
        disabled={!shouldRenderSelect}
        className={`select-breeds ${
          !shouldRenderSelect ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        defaultValue=""
      >
        <option value="" disabled>
          Variantes
        </option>

        {subBreeds.map((breed) => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedsSelect;
