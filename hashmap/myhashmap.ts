import { DoublyLinkedList } from "./doublylinkedlist";

class MyHashMap {
    bucketSize = 10;
    buckets: DoublyLinkedList<string, string>[] = [];
    hashFunc: (key: string) => number;

    constructor() {
        for (let i = 0; i < this.bucketSize; i++) {
            this.buckets[i] = new DoublyLinkedList<string, string>();
        }
        this.hashFunc = 'md5';
    }

    put(key: string, value: string): void {
        this.map.set(key, value);
    }

    get(key: string): string | undefined {
        return this.map.get(key);
    }

    remove(key: string): void {
        this.map.delete(key);
    }
}

export { MyHashMap };