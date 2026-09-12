import { use, useState } from "react";
import type { iTechnologyTypes } from "../Types";
import TechCard from "./TechCard";
import { toast } from "react-toastify";

interface iTechnologyProps {
  promise: Promise<iTechnologyTypes[]>;
}

const Tech = ({ promise }: iTechnologyProps) => {
  const data = use(promise);





  const [myStack, setMyStack] = useState<iTechnologyTypes[]>([]);


  const addToStack = (item: iTechnologyTypes) => {
    let alreadyExist = false;

    for (let i = 0; i < myStack.length; i++) {
      if (myStack[i].id === item.id) {
        alreadyExist = true;
      }
    }


    if (alreadyExist === false) {
      toast.success(`${item.name} added successfully!`);
      setMyStack([...myStack, item]);
    } else {
      toast.warning(`${item.name} already in your stack!`);
    }
  };


  const removeItem = (id: string) => {
    const newList = myStack.filter((item) => item.id !== id);
    toast.error(`${id} removed successfully!`);
    setMyStack(newList);
  };


  const removeAll = () => {
    toast.error(`All technologies removed successfully!`);
    setMyStack([]);
  };

  return (

    //  title section
    <section className="container mx-auto px-4 py-10 md:py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-base text-slate-500 md:text-lg">
          Pick your favourite technologies to build your ideal stack.
        </p>
      </div>

      {/* --------------------left Tech section ------------------------------------ */}
      {/* mein layout add total 12*/}
      <div className="grid grid-cols-12 gap-6">

        {/* title section */}

        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((item) => {
              let added = false;
              for (let i = 0; i < myStack.length; i++) {
                if (myStack[i].id === item.id) {
                  added = true;
                }
              }

              return (
                <TechCard key={item.id} techProps={item} onAdd={addToStack} isAdded={added} />
              );
            })}
          </div>
        </div>

        {/* --------------------Right Selected Stack-------------------------------------------- */}

        {/* right side - 3 colams */}
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
            <p className="mb-4 mt-1 text-xs text-slate-400">
              {myStack.length === 0
                ? "No Technology Selected yet"
                : `${myStack.length} Technology Selected`}
            </p>


            {myStack.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-2 py-10 text-center border-2 border-slate-400 rounded-2xl border-dashed">
                <p className="text-sm text-slate-400 ">
                  Your stack is empty!
                </p>
              </div>
            )}


            {myStack.length > 0 && (
              <ul className="flex flex-col gap-3">
                {myStack.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 hover:bg-slate-100 transition-all">
                    <div className="flex items-center gap-2">
                      <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.category}</p>
                      </div>
                    </div>


                    <button onClick={() => removeItem(item.id)} className="ml-2 text-slate-400 hover:text-red-500">❌</button>
                  </li>
                ))}
              </ul>
            )}

            {myStack.length > 0 && (
              <button onClick={removeAll} className="mt-5 w-full rounded-xl border border-red-200 py-2 text-sm font-semibold text-red-500 hover:bg-red-50">Remove All</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
