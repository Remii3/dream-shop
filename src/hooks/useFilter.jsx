import { useState } from "react";

const useFilter = () => {
  const [filterTypes, setFilterTypes] = useState([]);
  const [filterData, setFilterData] = useState({});

  const changeFilterValuesHandler = (filterParameters) => {
    const { minPrice, maxPrice } = filterParameters;
    let updatedFilterTypes = [...filterTypes];
    let updatedFilterData = { ...filterData };
    if (minPrice || maxPrice)
      if (
        toString(minPrice).trim() !== "" ||
        toString(maxPrice).trim() !== ""
      ) {
        if (!updatedFilterTypes.includes("price"))
          updatedFilterTypes.push("price");

        updatedFilterData = {
          ...filterData,
          price: {
            min: minPrice || 0,
            max: maxPrice || null,
          },
        };
      }
    setFilterTypes(updatedFilterTypes);
    setFilterData(updatedFilterData);
  };
  return {
    filterData: { filterTypes, filterData },
    changeFilterValues: changeFilterValuesHandler,
  };
};

export default useFilter;
