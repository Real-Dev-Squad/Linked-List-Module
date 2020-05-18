Single 0 index based Linked list with following API's :

1.  Add = list.add({"a" : 1})  -- add to the end of list 
          list.add({"a" : 1}, 2) -- add the node from begining of list
          list.add({"a":1},0)  -- add to the beigining of the linked list i.e updates the head 
       
2.  Get = list.get(index)  -- returns you the node present at that index if index does not exist then returns 
          null -- index is 0 based 
        
3.  Remove = list.remove(index) -- removes the node at given index returns the head

4.  Length = list.length -- returns the current length of list

5.  Print = list.print --returns the array containig value of list 

6. Reverse = list.reverse() --reverse the linked list 
