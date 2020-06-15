export default myMap => {
  var result = [];
  // console.log("chartData.history.zz ");

  for (let [key, value] of myMap) {
    if (value.toString() !== "NaN") {
      console.log("chartData.history.ssd " + myMap.get(key));
      result.push({
        date: key,
        confidence: value
      });
    }
  }

  return result
    .sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key < b.key) {
        return -1;
      } else return 0;
    });
};
