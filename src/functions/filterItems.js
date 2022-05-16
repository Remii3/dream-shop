const filterItems = (itemsArray, { filterTypes, filterData }) => {
  let updatedItemsArray;
  if (filterTypes && filterTypes.includes("price")) {
    updatedItemsArray = itemsArray.filter((item) => {
      if (
        parseFloat(item.price) > parseFloat(filterData.price.min) &&
        parseFloat(item.price) <
          parseFloat(filterData.price.max || item.price + 1)
      ) {
        return item;
      } else {
        return null;
      }
    });
    return updatedItemsArray;
  }
  return itemsArray;
};

export default filterItems;
