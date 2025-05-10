"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
var KeyValue = /** @class */ (function () {
    function KeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValue;
}());
var DoublyNode = /** @class */ (function () {
    function DoublyNode(key, value) {
        this.next = null;
        this.prev = null;
        this.value = new KeyValue(key, value);
    }
    return DoublyNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    DoublyLinkedList.prototype.append = function (key, value) {
        var newNode = new DoublyNode(key, value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    };
    DoublyLinkedList.prototype.get = function (key) {
        var current = this.head;
        while (current) {
            if (current.value.key === key)
                return current.value.value;
            current = current.next;
        }
        return undefined;
    };
    DoublyLinkedList.prototype.remove = function (key) {
        var current = this.head;
        while (current) {
            if (current.value.key === key) {
                if (current.prev)
                    current.prev.next = current.next;
                else
                    this.head = current.next;
                if (current.next)
                    current.next.prev = current.prev;
                else
                    this.tail = current.prev;
                return true;
            }
            current = current.next;
        }
        return false;
    };
    DoublyLinkedList.prototype.print = function () {
        var result = [];
        var current = this.head;
        while (current) {
            result.push("(".concat(current.value.key, ": ").concat(current.value.value, ")"));
            current = current.next;
        }
        console.log(result.join(' <-> '));
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
