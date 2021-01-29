"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMiddleNode = void 0;
function deleteMiddleNode(n) {
    // failure to delete when at the end of linked list
    if (n === null || n.next === null)
        return false;
    n.data = n.next.data;
    n.next = n.next.next;
}
exports.deleteMiddleNode = deleteMiddleNode;
//# sourceMappingURL=2.3_Delete_Middle_Node.js.map