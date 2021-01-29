import { LinkedList } from './Chapter_2/2.0_Linked_List'
import { deleteMiddleNode } from './Chapter_2/2.3_Delete_Middle_Node'
const l = new LinkedList()
l.append(10)
l.append(23)
l.append(13)
l.append(15)
l.print()
deleteMiddleNode(l.head.next.next.next)
l.print()