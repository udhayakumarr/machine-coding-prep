# Accordion Component – Machine Coding Round

A reusable and accessible Accordion component built using **React**.  
Designed to demonstrate clean state management, scalability, and accessibility—ideal for frontend machine-coding interviews.

---

## 📌 Problem Statement

Build an Accordion component that:
- Displays a list of collapsible sections
- Allows users to expand/collapse content
- Supports opening single or multiple items
- Follows basic accessibility best practices

---

## ✨ Features

- Expand / collapse accordion items
- Configurable single or multiple open items
- Accessible using semantic HTML & ARIA
- Clean and reusable component structure
- Easy to extend (nested accordion, animation)

---

## 🧱 Tech Stack

- React
- CSS
- react-icons



---

## 📊 Data Model

```js
const items = [
  {
    id: "1",
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    id: "2",
    title: "What is Virtual DOM?",
    content: "Virtual DOM is a lightweight copy of the real DOM."
  }
];


import Accordion from "./components/Accordion";
import { items } from "./data/accordionData";

function App() {
  return (
    <Accordion
      items={items}
      allowMultipleOpen={true}
    />
  );
}

export default App;



