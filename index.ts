import { LinkedList } from './Chapter_2/2.0_Linked_List'
import { sumLists, prepend } from './Chapter_2/2.5.1_Sum_Lists_Forward'
const l1 = new LinkedList()
l1.append(6)
l1.append(5)
l1.append(9)
l1.append(2)
const l2 = new LinkedList()
l2.append(4)
l2.append(9)
l2.append(7)

const sum = sumLists(l1, l2)
sum.print()