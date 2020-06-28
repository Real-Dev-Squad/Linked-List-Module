const LL = require("./constructors/linked-list");

let newLL = new LL({ 0: 1 });
newLL.add({ 2: 3 });
newLL.add({ 4: 5 });
newLL.add({ 6: 7 });
console.log(newLL.print());
console.log(newLL.reverse());
console.log(newLL.print());
