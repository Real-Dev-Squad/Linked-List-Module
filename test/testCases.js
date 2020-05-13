const util = require('util');
const List = require('../src/linkedlist')

//1->2->3->4->5->null

const listOne = new List();
listOne.add(1);
listOne.add(2);
listOne.add(3);
listOne.add(4);
listOne.add(5);

console.log('listOne', util.inspect(listOne.head, { depth: 5 }))

// kratika->chowdhary->developer  --before

const listTwo = new List();

listTwo.add('kratika');
listTwo.add('chowdhary');
listTwo.add('developer');

// Ms.->kratika->chowdhary->kanpur->developer --after

listTwo.add('kanpur', 2);
listTwo.add('Ms.', 0);

console.log(listTwo.get(2));
console.log(listTwo.get(10));
console.log(listTwo.print);

// {"a" : 1}->{"b" : 2}->{"c" : 3}->{"d" : 4}->{"e" : 5}->{"f" : 6}->null
const listThree = new List();
listThree.add({ 'a': 1 });
listThree.add({ 'b': 2 });
listThree.add({ 'c': 3 });
listThree.add({ 'd': 4 });
listThree.add({ 'e': 5 });
listThree.add({ 'f': 6 });

console.log(listThree.print);

listThree.delete(0);
listThree.delete(2);
try {
    listThree.delete(11);
} catch (e) {
    console.log(e.message)
}

console.log(listThree.print, listThree.size)