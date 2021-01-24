"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const _0_Node_1 = require("./0_Node");
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const end = new _0_Node_1.Node(data);
        let n = this.head;
        if (n === null) {
            this.head = end;
            return this.head;
        }
        while (n.next !== null) {
            n = n.next;
        }
        n.next = end;
        return this.head;
    }
    delete(data) {
        let n = this.head;
        if (n === null)
            return false;
        if (n.data === data) {
            this.head = n.next;
            return true;
        }
        // head -> 2 -> 4 -> 10 -> null
        while (n.next !== null) {
            if (n.next.data === data) {
                n.next = n.next.next;
                return true;
            }
            n = n.next;
        }
        return false;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=0_Linked_List.js.map