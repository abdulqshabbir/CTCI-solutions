import { LinkedList } from './Chapter_2/2.0_Linked_List'
import { isPalindrome } from './Chapter_2/2.6_Palindrome'

const l = new LinkedList()
l.append(1)
l.append(3)
l.append(5)
l.append(1)

console.log(isPalindrome(l))