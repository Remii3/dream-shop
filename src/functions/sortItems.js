const sortItems = (items, sortMethod) => {
  let sortedItems = [];
  switch (sortMethod) {
    case "created":
      sortedItems = items.sort((a, b) => {
        if (a.created > b.created) return -1;
        else if (a.created < b.created) return 1;
        else return 0;
      });
      return sortedItems;
    case "liked":
      sortedItems = items.sort((a, b) => {
        if (a.liked > b.liked) return -1;
        else if (a.liked < b.liked) return 1;
        else return 0;
      });
      return sortedItems;
    case "popularity":
      sortedItems = items.sort((a, b) => {
        if (a.popularity > b.popularity) return -1;
        else if (a.popularity < b.popularity) return 1;
        else return 0;
      });
      return sortedItems;
    default:
      sortedItems = items.sort((a, b) => {
        if (a.id > b.id) return -1;
        else if (a.id < b.id) return 1;
        else return 0;
      });
      return sortedItems;
  }
};

export default sortItems;
