export const filterSearch = (text, quizzes, setFilteredData) => {
  if (text) {
    const newData = quizzes.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  } else {
    setFilteredData(quizzes);
  }
};
