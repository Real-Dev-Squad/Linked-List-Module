Linked List Module

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About

A linked list is a linear data structure where each element, called a _node_, is a separate object.

Linked list elements are not stored at contiguous location; the elements are linked using pointers.

- Each node of a list is made up of two items - the `data` and a `reference` to the next node.
- The last node has a reference to null. 
- The entry point into a linked list is called the head of the list.
- It should be noted that head is not a separate node, but the reference to the first node. If the list is empty then the head is a null reference.

## Getting Started <a name = "getting_started"></a>

_To be filled_


### Prerequisites

JavaScript enviornment

### Installing

Install the Linked list module package from npm registry

```bash
npm i <repo>/Linked-List-Module
```

Require the module in the file where you want to use either using require or import syntax
```js
const list = require('Linked-List-Module');
```
```js
import list from 'Linked-List-Module';
```

## Usage <a name = "usage"></a>

Quick Start

Linked List Module helps you to include linked list in your JavaScript code. It is a single 0-indexed based list.

API Reference 

| Function              | Description                    |
| :---:                 | :-:                            |
| `add(node [, index])` | Adds new node to linked list   |
| `get(index)`          | Get the element at given index |
| `length`              | Number of nodes in the list    |
| `print()`             | Prints the list, for debugging |
| `reverse()`           | Reverses the list              |


## `add(node [, index])`

The `add(node [, index])` function adds the node to the linked List. There are two variations of adding a node in your linked list which this api provides that is adding the node at the end of the list or adding the node at any given position in your list. Keeping in mind the position specified should be a valid index.

##### Parameters 

add accepts two parameters, second one is optional.
1. `Data` to add - This is the data that you want to store as node and this api provide support for javascript data-type namely object, string, number, functions.
2. `Index` - This specifies the index where you want to store the node in your linked List.If you do not provide this parameter then the node will always be inserted at the end of list. The index here should be a positive integer. Remember this is a 0 based linked list. 

 ##### Usage

`list.add({ 'a': 1 })`  -- add to the end of list

`list.add({ 'a': 1 }, 2)` -- add the node from begining of list

`list.add({ 'a': 1 }, 0)`  -- add to the beigining of the linked list i.e updates the head 


## `get(index)`

The `get(index)` function returns the node present at that index. If the index is not present it will return NULL.  

### Parameters 

get accepts one parameter

1. `Index` - This specifies the index for which you want to retrieve the node. The index should be apositive integer.

##### Usage

`list.get(index)     ` 

## `length`

The length property present for Linked List returns the current number of nodes of list.

##### Usage

list.length 

## `print()`

The `print()` method displays the nodes of the linked list. It takes no parameter

##### Usage 
`list.print()`

## `reverse()`

The reverse function reverse the linked list. It accepts no parameter.

##### Usage
`list.reverse()`
