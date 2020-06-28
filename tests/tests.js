const LL = require("../constructors/linked-list");
const { beautifyLogs } = require("../helper-functions/beautifyLogs");

// Adding Items in the start
(function AddingItemsInTheStart() {
  let newLL = new LL(0);
  if (newLL.get(0).data === 0) {
    console.log("Test running fine");
  } else {
    console.log("Test Not Running fine");
  }
  console.log(newLL);
})();
// Adding Items in the end
