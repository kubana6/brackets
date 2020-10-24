module.exports = function check(str, bracketsConfig) {
  let result = false;
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let isOpenBracket;
  const strElements = str.split("");
  const strElementsLength = strElements.length;

  bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
    closeBrackets.push(element[1]);
  });
  const openBracketsLength = openBrackets.length;

  for (let i = 0; i < strElementsLength; i++) {
    isOpenBracket = false;

    if (stack.length > 0) {
      lastStackElement = stack[stack.length - 1];
      if (strElements[i] === closeBrackets[lastStackElement]) {
        stack.pop();
        result = true;
        continue;
      }
    }

    for (let j = 0; j < openBracketsLength; j++) {
      if (strElements[i] === openBrackets[j]) {
        stack.push([j]);
        result = false;
        isOpenBracket = true;
        break;
      }
    }
    if (isOpenBracket) continue;

    result = false;
    break;
  }
  return result;
}
