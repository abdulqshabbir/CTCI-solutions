export interface Node {
    data: number,
    next: Node | null
}

export class Node {
    constructor(data: number) {
        this.data = data
        this.next = null
    }
}