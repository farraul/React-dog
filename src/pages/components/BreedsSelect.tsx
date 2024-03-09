import { useState } from "react";

export const BreedsSelect = ({ breeds, setBreedSelected }: any) => {
  const [subBreeds, setSubBreeds] = useState([""]);
  const [shouldRenderSelect, setShouldRenderSelect] = useState(false);
  const [mainBreed, setMainBreed] = useState("");

  const getOptions = () => {
    return ["Select", ...Object.entries(breeds).map((x) => x[0])];
  };

  const onSelectChange = (evt) => {
    const value = evt.target.value;
    if (breeds[value].length > 0) {
      setSubBreeds(["Select", ...breeds[value]]);
      setShouldRenderSelect(true);
    } else {
      setSubBreeds([]);
      setShouldRenderSelect(false);
    }
    setBreedSelected(value);
    setMainBreed(value);
  };

  const onSubSelectChange = (evt) => {
    console.log("evt:::", evt);
    const value = evt.target.value;
    setBreedSelected(`${mainBreed}/${value}`);
  };

  return (
    <div>
      <select id="" name="" onChange={onSelectChange}>
        {getOptions().map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      {shouldRenderSelect && (
        <select id="" name="" onChange={onSubSelectChange}>
          {subBreeds.map((x) => (
            <option value={x} key={x}>
              {x}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
