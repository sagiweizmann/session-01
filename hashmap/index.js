"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyHashMap_1 = require("./MyHashMap");
var myMap = new MyHashMap_1.MyHashMap();
myMap.put("abc", 123);
console.log(myMap.get("abc")); // 123
myMap.put("abc", 5050);
console.log(myMap.get("abc")); // 5050
try {
    console.log(myMap.get("foo"));
}
catch (e) {
    console.log("non existing key");
}
myMap.remove("abc");
try {
    console.log(myMap.get("abc"));
}
catch (e) {
    console.log("non existing key");
}
myMap.remove("bang");
