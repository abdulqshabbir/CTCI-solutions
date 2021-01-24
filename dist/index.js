"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_0_Linked_List_1 = require("./Chapter_2/2.0_Linked_List");
const _2_1_Remove_Dups_1 = require("./Chapter_2/2.1_Remove_Dups");
const l = new _2_0_Linked_List_1.LinkedList();
l.append(3);
l.append(3);
l.append(2);
l.append(4);
l.append(4);
l.append(5);
l.print();
_2_1_Remove_Dups_1.removeDuplicates(l);
l.print();
//# sourceMappingURL=index.js.map