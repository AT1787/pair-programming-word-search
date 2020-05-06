const { transpose } = require('./transposer');

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalArr = transpose(letters);
  const verticalJoin = verticalArr.map(ls => ls.join(''));
  
  for (let h of horizontalJoin) {
    if (h.includes(word)) {
      return true;
    }
  }
  for (let v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;