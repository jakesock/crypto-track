import { useState, useEffect } from 'react';
import { useActions } from './useActions';

type UseCoinSearchReturnValue = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export const useCoinSearch = (
  initialValue: string,
  timeout: number,
): UseCoinSearchReturnValue => {
  const [term, setTerm] = useState(initialValue);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const { searchCoins } = useActions();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [term, timeout]);

  useEffect(() => {
    const search = async () => {
      searchCoins(debouncedTerm);
    };

    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm, searchCoins]);

  return [term, setTerm];
};
