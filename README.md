Quick Start

Linked List Module helps you to include linked list in your javascript code. It is a single 0 based linked list

API Rerefernce 

1 . add()

The add() function adds the node to the linked List. There are two variations of adding a node in your linked list which this api provides that is adding the node at the end of the list or adding the node at any given position in your list. Keeping in mind the position specified should be a valid index.

Parameters 

add accepts two parameters, second one is optional.
1. Data or value to add - This is the data that you want to store as node and this api provide support for javascript data-type namely object, string, number, functions.
2. Index - This specifies the index where you want to store the node in your linked List.If you do not provide this parameter then the node will always be inserted at the end of list. The index here should be a positive integer. Remember this is a 0 based linked list. 

Usage


list.add({"a" : 1})  -- add to the end of list 
list.add({"a" : 1}, 2) -- add the node from begining of list
list.add({"a":1},0)  -- add to the beigining of the linked list i.e updates the head 


 2 . get()

The get() function returns the node present at that index. If the index is not present it will return NULL.  

Parameters 

get accepts one parameter

1.Index - This specifies the index for which you want to retrieve the node. The index should be apositive integer.

Usage

list.get(index)      

3. length

The length method present for Linked List returns the current length of list . It takes no parameter 

Usage

list.length 

4. print 

The print method returns the array containing the nodes of the linked list. It takes no parameter

Usage 
list.print

5. reverse()

The reverse function reverse the linked list. It accepts no parameter.

Usage
list.reverse()



       

