import LinkedList from "../02-LinkedLists/LinkedList";
import { EqualsFunction } from "../../utils";

class Queue<T> implements Iterable<T> {
    private list: LinkedList<T>;

    constructor(equalsfunction?: EqualsFunction<T>) {
        if (equalsfunction) this.list = new LinkedList(equalsfunction);
        else this.list = new LinkedList();
    }

    /*****************************************************************************
                                  INSPECTION
  *****************************************************************************/

    /**
     * Returns size of queue - O(1)
     */
    size(): number {
        return this.list.size();
    }

    /**
     * Returns true if queue is empty, false otherwise - O(1)
     */
    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    /**
     * Deletes all elements in queue - O(1)
     */
    clear(): void {
        this.list.clear();
    }

    /*****************************************************************************
                                  INSERTION/DELETION
    *****************************************************************************/

    /**
     * Enqueues element into queue - O(1)
     * @param {T} element - element to be enqueued
     */

    enqueue(element: T): void {
        this.list.addBack(element);
    }

    /**
     * Dequeues element from queue - O(1)
     * @returns {T}
     */

    dequeue(): T | null {
        return this.list.removeFront();
    }

    /*****************************************************************************
                                  ACCESSING
    *****************************************************************************/
    /**
     * Peeks at the element at the front of the queue - O(1)
     * @returns {T} - Frontmost element
     */

    peekingFront(): T | null {
        return this.list.peekFront();
    }

    peekingBack(): T | null {
        return this.list.peekBack();
    }
    /**
     * Peeks at the element at the back of the queue - O(1)
     * @returns {T} - Backmost element
     */

    /*****************************************************************************
                                  SEARCHING
  *****************************************************************************/
    /**
     * Checks if value is in queue - O(n)
     * @param {T} element  - element to search for
     * @returns {boolean}
     */
    contains(element: T): boolean {
        return this.list.contains(element);
    }

    /*****************************************************************************
                                  HELPERS
  *****************************************************************************/
    [Symbol.iterator](): Iterator<T> {
        return this.list[Symbol.iterator]();
    }
}

export default Queue;
