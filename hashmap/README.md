# HashMap Project (TypeScript)

This project implements a basic `HashMap` using a `DoublyLinkedList` for bucket storage and a pluggable hash function (defaulting to MD5 using Node.js `crypto` module).

---

## 📦 Installation

```bash
npm install
```

---

## 🔨 Build the Project

```bash
npx tsc
```

> Make sure `tsconfig.json` is configured to output compiled JS files to a directory like `dist/`.

---

## 🚀 Run the Project

```bash
node dist/index.js
```

Or, if you're running the compiled JS directly from root:

```bash
node index.js
```

---

## 🗂 Folder Structure

```
hashmap/
├── hashFunctions/
│   └── md5.ts               # Custom MD5 wrapper using Node's crypto
├── DoublyLinkedList.ts      # Core data structure
├── MyHashMap.ts             # HashMap class with buckets and hashing
├── index.ts                 # Example usage or entry point
├── .gitignore
├── package.json
├── tsconfig.json
```

---

## ✅ Example Usage

```ts
import md5 from './hashFunctions/md5';
import MyHashMap from './MyHashMap';

const map = new MyHashMap();
map.put('foo', 'bar');
console.log(map.get('foo')); // Output: bar
```

---

## 📝 Notes

- Ensure TypeScript is installed (`npm install typescript --save-dev` or globally via `npm install -g typescript`).
- Requires Node.js version 14 or above.
- Use `@types/node` for proper type resolution with Node modules:

```bash
npm install --save-dev @types/node
```
