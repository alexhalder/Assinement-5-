# Assignment 5 - My React Project

This is my 5th assignment where I built a simple React app. I tried to apply what I learned about components, props, and state in this project. It was challenging but fun!

### Technology that I used

- React.js
- Tailwind CSS
- TypeScript
- React-Toastify
- JSON
- Vite
- DaisyUI
- Google Fonts
- --

### 3 Features about my project

1. Shows a list of items dynamically on the screen.
2. The design is simple and responsive (works on mobile).
3. Users can interact with the app (like selecting items or seeing details).

---

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX looks just like HTML but we write it inside our JavaScript files. It is used in React because it makes it much easier to write and understand how our component will look, instead of using confusing JavaScript functions to create elements.

**2. What is the difference between props and state?**
State is for data that can change inside a component (like a counter or text input). The component controls its own state. Props are used to pass data from a parent component down to a child component. A child component can't change its props, it just reads them.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` allows us to add variables to our component that React will watch. When we update these variables, React knows it needs to update the screen. I used it to keep track of user actions, like which items are selected or added to a list.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
In this project, I actually used the new React `use()` hook instead! I created a promise to fetch the JSON data and passed it to `use()`. I did this because it is a much easier and more modern way to load data without having to set up `useEffect` or extra state variables.

**5. Why does every item in a .map() list need a unique key prop?**
When we render a list, React needs a way to identify each item. If we add, remove, or change an item in the list, the unique key helps React figure out exactly which item changed so it doesn't have to re-render the whole list from scratch.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different things on the screen based on a condition (like an if/else statement). For example, I used it to show an empty message when there is no data:

```tsx
{
  myStack.length === 0 && (
    <div className="flex flex-col items-center justify-center gap-2 py-10 text-center border-2 border-slate-400 rounded-2xl border-dashed">
      <p className="text-sm text-slate-400 ">Your stack is empty!</p>
    </div>
  );
}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
To pass data to a child, we use props (like adding attributes to an HTML tag). To send data back up to the parent, the parent needs to send a function down as a prop. Then, the child can call that function and pass the data inside it, and the parent will receive it.
