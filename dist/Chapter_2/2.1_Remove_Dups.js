"use strict";
/*
    Problem:  Write code to remove duplicates from an unsorted linked list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = void 0;
// head -> 2 -> 5 -> 3 -> 2 -> null
/*
    Naive solution:

    create a map which maps node data -> count
    for each node in linked list:
        if (!map[node.data])
            map[node.data] = 1
        else:
            map[node.data]++
    for each node in linked list:
        if (map[node.data] > 1)
            list.delete(node.data)
    return head
*/
function removeDuplicates(list) {
    debugger;
    const map = new Map();
    let n = list.head;
    // one or two nodes in a linked list cannot have duplicates 
    if (n === null || n.next === null)
        return list;
    // head -> 3 -> 3 -> null
    while (n.next !== null) {
        if (!map.get(n.data)) {
            map.set(n.data, 1);
            n = n.next;
        }
        else {
            const data = n.data;
            const count = map.get(n.data);
            map.set(data, count + 1);
            n = n.next;
        }
    }
    if (!map.get(n.data)) {
        map.set(n.data, 1);
    }
    else {
        const data = n.data;
        const count = map.get(n.data);
        map.set(data, count + 1);
    }
    let m = list.head;
    while (m.next !== null) {
        if (map.get(m.data) > 1) {
            list.delete(m.data);
        }
        m = m.next;
    }
    if (map.get(m.data) > 1) {
        list.delete(m.data);
    }
    return list;
}
exports.removeDuplicates = removeDuplicates;
//# sourceMappingURL=2.1_Remove_Dups.js.map