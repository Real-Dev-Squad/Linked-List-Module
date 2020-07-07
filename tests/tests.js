const LL = require("../constructors/linked-list");
const getDummyLinkedList = require("../helper-functions/create-dummy-linked-list");
const test = require("../helper-functions/test");

test("Test for adding data is a linked list sequentially", function addingDataInLLSequentially() {
  let newLL = new LL();

  // [[index, value]]
  let arr = [
    [0, 1],
    [1, 9],
    [2, 9],
    [3, 20],
  ];

  // Adding data in LL
  for (let el of arr) {
    let index = el[0];
    let data = el[1];
    newLL.add(data, index);
  }

  // Checking if the enter data is valid
  for (let el of arr) {
    let index = el[0];
    let data = el[1];
    let storedData = newLL.get(index);

    if (data !== storedData.data) {
      return;
    }
  }

  return true;
});

test("Test of randomly adding data in a linked list", function addingDataAnyWhereInTheLL() {
  let initialLLLength = 10;
  let dummyLL = getDummyLinkedList(initialLLLength);

  if (dummyLL.add(40, 3).get(3).data !== 40) {
    return;
  } else if (dummyLL.add(50, 0).get(0).data !== 50) {
    return;
  } else if (dummyLL.add(100).get(dummyLL.length - 1).data !== 100) {
    return;
  }

  return true;
});
