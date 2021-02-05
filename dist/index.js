"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_0_Linked_List_1 = require("./Chapter_2/2.0_Linked_List");
const _2_0_Node_1 = require("./Chapter_2/2.0_Node");
const _2_8_Find_Loop_1 = require("./Chapter_2/2.8_Find_Loop");
const A = new _2_0_Linked_List_1.LinkedList();
A.head = new _2_0_Node_1.Node(1);
A.head.next = new _2_0_Node_1.Node(2);
A.head.next.next = new _2_0_Node_1.Node(3);
A.head.next.next.next = new _2_0_Node_1.Node(4);
A.head.next.next.next.next = new _2_0_Node_1.Node(5);
A.head.next.next.next.next.next = A.head.next;
console.log(_2_8_Find_Loop_1.findLoop(A));
//# sourceMappingURL=index.js.map