import { toast } from "react-toastify";
import { useState } from "react";
import { optionToast } from "src/utils/toast";

interface UseSubmitProps<T, U> {
  callback: (data: T) => Promise<U>;
  param: T;
}

const useSubmit = <T, U>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async ({ callback, param }: UseSubmitProps<T, U>) => {
    try {
      setIsLoading(true);
      const result = await callback(param);
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
