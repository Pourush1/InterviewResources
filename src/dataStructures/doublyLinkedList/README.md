# Doubly Linked List

In computer science, a **doubly linked list** is a linked data structure that
consists of a set of sequentially linked records called nodes. Each node contains
two fields, called links, that are references to the previous and to the next
node in the sequence of nodes. The beginning and ending nodes' previous and next
links, respectively, point to some kind of terminator, typically a sentinel
node or null, to facilitate the traversal of the list. If there is only one
sentinel node, then the list is circularly linked via the sentinel node. It can
be conceptualized as two singly linked lists formed from the same data items,
but in opposite sequential orders.

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

The two node links allow traversal of the list in either direction. While adding
or removing a node in a doubly linked list requires changing more links than the
same operations on a singly linked list, the operations are simpler and
potentially more efficient (for nodes other than first nodes) because there
is no need to keep track of the previous node during traversal or no need
to traverse the list to find the previous node, so that its link can be modified.

## Complexities

## Time Complexity

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

### Space Complexity

O(n)

## References

- [Github](https://github.dev/trekhleb/javascript-algorithms)
