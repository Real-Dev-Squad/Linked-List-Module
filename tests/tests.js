const LL = require("../constructors/linked-list");
const getDummyLinkedList = require("../helper-functions/create-dummy-linked-list");
const test = require("../helper-functions/test");

test("Test for adding data is a linked list sequentially", function addingDataInLLSequentially() {
  let newLL = new LL();

  // [[index, value]]
  let arr = [80, 20, 33, 400, 90];

  // Adding data in LL
  for (let [index, el] of arr.entries()) {
    newLL.add(el, index);
  }

  // Checking if the enter data is valid
  for (let [index, el] of arr.entries()) {
    let storedData = newLL.get(index);

    if (el !== storedData.data) {
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

test("Test of reversing the LinkedList", function reversingLL() {
  let newLL = new LL();

  // [[index, value]]
  let arr = [1, 20, 80, 50, 60, 800];

  // Adding data in LL
  for (let [index, el] of arr.entries()) {
    newLL.add(el, index);
  }

  // Reversing the LL
  newLL.reverse();
  arr.reverse();

  // Checking if the enter data is valid
  for (let [index, el] of arr.entries()) {
    let storedData = newLL.get(index);

    if (el !== storedData.data) {
      return;
    }
  }

  return true;
});
