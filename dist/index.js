"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_0_Linked_List_1 = require("./Chapter_2/2.0_Linked_List");
const _2_3_Delete_Middle_Node_1 = require("./Chapter_2/2.3_Delete_Middle_Node");
const l = new _2_0_Linked_List_1.LinkedList();
l.append(10);
l.append(23);
l.append(13);
l.append(15);
l.print();
_2_3_Delete_Middle_Node_1.deleteMiddleNode(l.head.next.next.next);
l.print();
//# sourceMappingURL=index.js.map