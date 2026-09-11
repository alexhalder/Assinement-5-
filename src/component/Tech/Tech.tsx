import { use } from "react";
import type { iTechnologyTypes } from "../Types";

interface iTechnologyProps {
  promise: Promise<iTechnologyTypes[]>;
}
const Tech = ({ promise }: iTechnologyProps) => {
  const data = use(promise);
  console.log("data is ", data);

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Tech;
