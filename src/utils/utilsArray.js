const utilsArray = {
  shuffled(array) {
    return array.sort(() => Math.random() - 0.5);
  },

  createArr(total, start = 0, step = 1) {
    const arr = [];
    for (let i = start; i <= total; i += step) {
      arr.push(i);
    }
    return arr;
  },
};

export default utilsArray;
