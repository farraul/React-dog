import { toast } from "react-toastify";
import { useState } from "react";
import { optionToast } from "src/utils/toast";

interface UseSubmitProps<T, U> {
  data: T;
  callback: (data: T) => Promise<U>;
}

const useSubmit = <T, U>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async ({ data, callback }: UseSubmitProps<T, U>) => {
    try {
      setIsLoading(true);
      const result = await callback(data);
      toast.success("Se ha realizado la peticion con éxito", optionToast);
      return result;
    } catch (error) {
      toast.error(error as string, optionToast);
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    setError,
    handleSubmit,
  };
};

export default useSubmit;
