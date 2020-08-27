import LinkedListNode from "./LinkedListNode";

interface iList<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    size: number;
}

export default iList;
