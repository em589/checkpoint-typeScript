# TypeScript Vehicle Project

This project demonstrates how to create and use a TypeScript interface and class, compile the code into JavaScript, and run it both in Node.js and in the browser.

---

## 📌 Project Structure

```
project/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js   (generated automatically)
│
└── index.html
```

---

## 🚀 Step 1 — Initialize the Project

Open a terminal inside VS Code and run:

```bash
npm init -y
```

---

## 🚀 Step 2 — Install TypeScript

```bash
npm install --save-dev typescript
```

Initialize TypeScript configuration:

```bash
npx tsc --init
```

---

## ⚙️ Step 3 — Configure tsconfig.json

Edit `tsconfig.json` to look like this:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

---

## 📝 Step 4 — Create index.ts

Inside the `src` folder, create `index.ts` and add:

```ts
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
```

---

## 🔧 Step 5 — Compile TypeScript

Run:

```bash
npx tsc
```

This will generate `dist/index.js`.

---

## 🌐 Step 6 — Create index.html

Create a file named `index.html` in the project root:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TypeScript Vehicle Demo</title>
  </head>
  <body>
    <h1>Check the Console!</h1>

    <script src="dist/index.js"></script>
  </body>
</html>
```

---

## 🌍 Step 7 — Run the Project in Chrome

### Method 1 — Using Live Server

Right‑click `index.html` → **Open with Live Server**.

### Method 2 — Manually

1. Open Chrome
2. Press **Ctrl + O**
3. Select `index.html`
4. Open Developer Tools (**F12**) → Console

You should see:

```
Car engine started
```

---

## 🎉 Done!

You now have a working TypeScript project that compiles to JavaScript and runs in both Node and the browser.

If you want to extend the project (UI, classes, modules, multiple vehicles), feel free to ask!
