const LL = require("../constructors/linked-list");
const { beautifyLogs } = require("../helper-functions/beautifyLogs");

(function AddingItemsInTheStart() {
  let testName = "Test for adding data is linked list";
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
      beautifyLogs(testName, false);
      return;
    }
  }

  beautifyLogs(testName, true);
})();
// Adding Items in the end
