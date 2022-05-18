const filterItems = (itemsArray, { filterTypes, filterData }) => {
  let updatedItemsArray = itemsArray;

  if (filterTypes && filterTypes.includes("search")) {
    updatedItemsArray = updatedItemsArray.filter((item) => {
      return item.name.toUpperCase().includes(filterData.search.toUpperCase());
    });
  }

  if (filterTypes && filterTypes.includes("price")) {
    updatedItemsArray = updatedItemsArray.filter((item) => {
      return (
        parseFloat(item.price) > parseFloat(filterData.price.min) &&
        parseFloat(item.price) <
          parseFloat(filterData.price.max || item.price + 1)
      );
    });
  }

  return updatedItemsArray;
};

export default filterItems;
