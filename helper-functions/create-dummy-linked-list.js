const LL = require("../constructors/linked-list");

const getRandomData = function () {
  let max = 100;
  let min = 1;
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @param {number} length
 */

const getDummyLinkedList = function (length) {
  let index = 0;
  let newLL = new LL();
  while (index < length) {
    newLL.add(getRandomData(), index);
    index++;
  }

  return newLL;
};

module.exports = getDummyLinkedList;
