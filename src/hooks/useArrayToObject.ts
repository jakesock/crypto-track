export const useArrayToObject = (array: [], key: string) => {
  const initialValue = {};
  return array.reduce((object, item) => {
    return {
      ...object,
      [item[key]]: item,
    };
  }, initialValue);
};
