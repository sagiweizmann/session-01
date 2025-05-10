"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHashMap = void 0;
var MyHashMap = /** @class */ (function () {
    function MyHashMap() {
        this.map = new Map();
        this.hashFunc = 'md5';
    }
    MyHashMap.prototype.put = function (key, value) {
        this.map.set(key, value);
    };
    MyHashMap.prototype.get = function (key) {
        return this.map.get(key);
    };
    MyHashMap.prototype.remove = function (key) {
        this.map.delete(key);
    };
    return MyHashMap;
}());
exports.MyHashMap = MyHashMap;
