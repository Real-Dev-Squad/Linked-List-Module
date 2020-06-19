var linkedList = require('./linkedList');

var ll = new linkedList()
ll.length;
console.log(ll.getAllNodes());
console.log('Result: '+ll.getAllNodes()+' Expected: '+[], isEqual(ll.getAllNodes(),[]));
ll.add(2);
ll.add(1);
ll.add(4);
console.log(ll.getAllNodes());
console.log('Result: '+ll.getAllNodes()+' Expected: '+[2,1,4] ,isEqual(ll.getAllNodes(),[2,1,4]));
ll.add(3,3)
ll.add(6,4)
console.log(ll.getAllNodes());
console.log('Result: '+ll.getAllNodes()+' Expected: '+[2,1,4,3,6] ,isEqual(ll.getAllNodes(),[2,1,4,3,6]));
ll.remove(0)
ll.remove()
console.log(ll.getAllNodes());
console.log('Result: '+ll.getAllNodes()+' Expected: '+[1,4,3] ,isEqual(ll.getAllNodes(),[1,4,3]));
ll.reverse();
console.log(ll.getAllNodes());
console.log('Result: '+ll.getAllNodes()+' Expected: '+[3,4,1] ,isEqual(ll.getAllNodes(),[3,4,1]));
console.log(ll.length);

function isEqual(a, b){
 if(a.length !== b.length) return false;
 for(var i = 0;i<a.length;i++){
  if(a[i] !== b[i])
  return false;
 }
 return true
}