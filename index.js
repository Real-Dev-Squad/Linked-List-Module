const LL = require("./constructors/linked-list");

let newLL = new LL(0);
console.log(newLL.print());
newLL.add(1, 0);
console.log(newLL.print());
newLL.add(2, 1);
console.log(newLL.print());
newLL.add(3, 3);
console.log(newLL.print());
