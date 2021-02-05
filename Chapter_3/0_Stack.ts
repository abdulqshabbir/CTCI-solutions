export interface StackNode {
    data: number,
    next: StackNode | null
}
export class StackNode {
    constructor(data: number) {
        this.data = data
        this.next = null
    }
}
export interface Stack {
    top: StackNode | null
}

// tslint:disable-next-line: max-classes-per-file
export class Stack {
    constructor() {
        this.top = null
    }
    isEmpty() {
        return this.top === null
    }
    pop() {
        // top -> null
        // top -> 2 -> 3 -> null
        if (this.isEmpty()) return null

        const result = this.top.data
        if (this.top.next === null) {
            this.top = null
            return result
        }
        this.top = this.top.next
        return result
    }
    push(data: number) {
        const newTop = new StackNode(data)
        const rest = this.top
        this.top = newTop
        newTop.next = rest
    }
    peek() {
        if (this.top === null) return null
        return this.top.data
    }
}