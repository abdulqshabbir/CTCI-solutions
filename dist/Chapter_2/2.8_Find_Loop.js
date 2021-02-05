"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLoop = void 0;
function findLoop(A) {
    /*
        Suppose when the slow pointer is k steps into linked list it is at the head of the loop
        fast pointer has taken 2k steps and has moved k steps into loop
        fast pointer is K steps behind slow which is K = loop_size - k -> K = k + m*loop_size -> K = k mod(loop_size) steps behind slow
        leave fast pointer where it is
        move slow pointer to start of list
        move both pointers k steps
        they should collide at the start of loop
    */
    let slow = A.head;
    let fast = A.head;
    // find meeting point of fast and slow
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            break;
    }
    // if list not circular
    if (fast === null || fast.next === null)
        return null;
    // reset slow pointer and move both
    slow = A.head;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
        if (slow === fast) {
            return slow;
        }
    }
}
exports.findLoop = findLoop;
//# sourceMappingURL=2.8_Find_Loop.js.map