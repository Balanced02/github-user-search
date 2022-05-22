import { useEffect } from "react";

type TimeoutMapProp = {
  [key: string]: ReturnType<typeof setTimeout> | null;
};

const timeoutMap: TimeoutMapProp = {}

export const useDebounce = (key: string) => {
  useEffect(() => {
    if (!timeoutMap[key]) {
      timeoutMap[key] = null
    }
  }, [key])
  
  const debounce = <T extends (...args: any[]) => any>(
    callback: T,
    waitFor: number
  ) => {
    return (...args: Parameters<T>): ReturnType<T> => {
      let result: any;
      const timeout = timeoutMap[key]
      if (timeout) {
        clearTimeout(timeout);
      };
      timeoutMap[key] = setTimeout(() => {
        result = callback(...args);
      }, waitFor);
      return result;
    };
  };

  return { debounce }
}