import { useState } from "react";

const useFilter = () => {
  const [filterTypes, setFilterTypes] = useState([]);
  const [filterData, setFilterData] = useState({});

  const changeFilterValuesHandler = (filterParameters) => {
    const { searchText, minPrice, maxPrice } = filterParameters;
    let updatedFilterTypes = [];
    let updatedFilterData = {};
    console.log(searchText, minPrice, maxPrice);

    if (searchText !== "") updatedFilterTypes.push("search");

    if (minPrice !== 0 || maxPrice !== null) {
      updatedFilterTypes.push("price");
    }

    updatedFilterData = {
      ...filterData,
      search: searchText || "",
      price: {
        min: minPrice || 0,
        max: maxPrice || null,
      },
    };

    setFilterTypes(updatedFilterTypes);
    setFilterData(updatedFilterData);
  };
  return {
    filterData: { filterTypes, filterData },
    changeFilterValues: changeFilterValuesHandler,
  };
};

export default useFilter;
