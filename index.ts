import { LinkedList } from './Chapter_2/2.0_Linked_List'
import { partition } from './Chapter_2/2.4_Partition_List'
const l = new LinkedList()
l.append(10)
l.append(23)
l.append(13)
l.append(15)
l.print()
const a = partition(l, 24)
a.print()