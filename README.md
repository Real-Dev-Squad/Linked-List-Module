Single 0 index based Linked list with following API's :

1.  Add = list.add({"a" : 1})  -- add to the end of list 
          list.add({"a" : 1}, 2) -- add the node from begining of list
          list.add({"a":1},0)  -- add to the beigining of the linked list i.e updates the head and return this head
       
2.  Get = list.get(index)  -- returns you the node present at that index if index does not exist then returns 
          null
        
3.  Remove = list.remove(index) -- removes the node at given index returns the head

4.  Length = list.length -- returns the current length of list
