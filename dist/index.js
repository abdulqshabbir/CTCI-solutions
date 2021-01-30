"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_0_Linked_List_1 = require("./Chapter_2/2.0_Linked_List");
const _2_4_Partition_List_1 = require("./Chapter_2/2.4_Partition_List");
const l = new _2_0_Linked_List_1.LinkedList();
l.append(10);
l.append(23);
l.append(13);
l.append(15);
l.print();
const a = _2_4_Partition_List_1.partition(l, 24);
a.print();
//# sourceMappingURL=index.js.map