"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHashMap = void 0;
var doublyLinkedList_1 = require("./doublyLinkedList");
var md5_1 = require("./hashFunctions/md5");
var MyHashMap = /** @class */ (function () {
    function MyHashMap(hashFunc) {
        if (hashFunc === void 0) { hashFunc = md5_1.default; }
        this.bucketSize = 10;
        this.buckets = [];
        this.hashFunc = hashFunc;
        for (var i = 0; i < this.bucketSize; i++) {
            this.buckets[i] = new doublyLinkedList_1.DoublyLinkedList();
        }
    }
    MyHashMap.prototype.put = function (key, value) {
    };
    MyHashMap.prototype.get = function (key) {
        return undefined;
    };
    MyHashMap.prototype.remove = function (key) {
    };
    return MyHashMap;
}());
exports.MyHashMap = MyHashMap;
