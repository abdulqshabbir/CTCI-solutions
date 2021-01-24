"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const _2_0_Node_1 = require("./2.0_Node");
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const end = new _2_0_Node_1.Node(data);
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
    print() {
        let n = this.head;
        let result = 'head ->';
        if (n === null) {
            result += ' null';
            console.log(result);
            return;
        }
        while (n && n.next !== null) {
            result += ' ' + n.data + ' ->';
            n = n.next;
        }
        result += ' ' + n.data + ' ->';
        result += ' null';
        console.log(result);
        return;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=2.0_Linked_List.js.map