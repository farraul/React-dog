import { useState } from "react";

interface DogBreeds {
  [breed: string]: string[];
}
interface Props {
  breeds: DogBreeds;
  setBreedSelected: (Breed: string) => void;
}

export const BreedsSelect = ({ breeds, setBreedSelected }: Props) => {
  console.log("breeds:::", breeds);

  const [subBreeds, setSubBreeds] = useState([""]);
  const [shouldRenderSelect, setShouldRenderSelect] = useState(false);
  const [mainBreed, setMainBreed] = useState("");

  const getOptions = () => {
    return [...Object.entries(breeds).map((x) => x[0])];
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
      >
        <option value="" disabled>
          Raza
        </option>
        {getOptions().map((breed) => (
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
