"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_0_Linked_List_1 = require("./Chapter_2/2.0_Linked_List");
const _2_5_1_Sum_Lists_Forward_1 = require("./Chapter_2/2.5.1_Sum_Lists_Forward");
const l1 = new _2_0_Linked_List_1.LinkedList();
l1.append(6);
l1.append(5);
l1.append(9);
l1.append(2);
const l2 = new _2_0_Linked_List_1.LinkedList();
l2.append(4);
l2.append(9);
l2.append(7);
const sum = _2_5_1_Sum_Lists_Forward_1.sumLists(l1, l2);
sum.print();
//# sourceMappingURL=index.js.map