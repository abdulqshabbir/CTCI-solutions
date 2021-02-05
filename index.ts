import { LinkedList } from './Chapter_2/2.0_Linked_List'
import { Node } from './Chapter_2/2.0_Node'
import { findLoop } from './Chapter_2/2.8_Find_Loop'

const A = new LinkedList()
A.head = new Node(1)
A.head.next = new Node(2)
A.head.next.next = new Node(3)
A.head.next.next.next = new Node(4)
A.head.next.next.next.next = new Node(5)
A.head.next.next.next.next.next = A.head.next

console.log(findLoop(A))