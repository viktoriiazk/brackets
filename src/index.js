module.exports = function check(str, bracketsConfig) {
  const newArr = bracketsConfig.map((el) => el.join(''));

  for (let i = 0; i < newArr.length;) {
    if (str.includes(newArr[i])) {
      str = str.replace(newArr[i], '');
      i = 0;
      continue;
    }
    i++;
  }
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }

};
