import { LinkedList } from './Chapter_2/2.0_Linked_List'
import { removeDuplicates } from './Chapter_2/2.1_Remove_Dups'

const l = new LinkedList()
l.append(3)
l.append(3)
l.append(2)
l.append(4)
l.append(4)
l.append(5)
l.print()
removeDuplicates(l)
l.print()