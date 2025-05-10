import { DoublyLinkedList } from "./doublyLinkedList";
import md5 from './hashFunctions/md5';
 
class MyHashMap {
    bucketSize = 10;
    buckets: DoublyLinkedList<string, any>[] = [];
    hashFunc: (key: string) => string;

    constructor(hashFunc: (key: string) => string = md5) {
        this.hashFunc = hashFunc;

        for (let i = 0; i < this.bucketSize; i++) {
            this.buckets[i] = new DoublyLinkedList<string, any>();
        }
    }

    put(key: string, value: any): void {

    }

    get(key: string): string | undefined {

        return undefined;
    }

    remove(key: string): void {

    }
}

export { MyHashMap };