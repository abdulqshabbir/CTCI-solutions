import { Node } from "./2.0_Node";

export function deleteMiddleNode(n: Node): void | boolean {

    // failure to delete when at the end of linked list
    if (n === null || n.next === null) return false

    n.data = n.next.data
    n.next = n.next.next
}