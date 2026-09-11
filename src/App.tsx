import { Suspense } from "react";
import "./App.css";
import Hero from "./component/Hero/Hero";
import Nav from "./component/Nav";
import Tech from "./component/Tech/Tech";

export const promise = async () => {
  const res = await fetch("../public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Tech promise={promise()} />
      </Suspense>
    </>
  );
}

export default App;
