import { Suspense } from "react";
import "./App.css";
import Hero from "./component/Hero/Hero";
import Nav from "./component/Nav";
import Tech from "./component/Tech/Tech";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";

export const promise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Hero />

      <Suspense
        fallback={
          <div className="flex min-h-[300px] items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Tech promise={promise()} />
      </Suspense>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
