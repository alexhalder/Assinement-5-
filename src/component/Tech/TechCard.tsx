import type { iTechnologyTypes } from "../Types";

interface iTechCardProps {
  techProps: iTechnologyTypes;
  onAdd: (item: iTechnologyTypes) => void;
  isAdded: boolean;
}


const TechCard = ({ techProps, onAdd, isAdded }: iTechCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">

      <div className="flex items-start justify-between">
        <img src={techProps.icon} alt={techProps.name} className="h-10 w-10 object-contain" />
        <span className="rounded-full bg-orange-100 text-orange-600 px-2.5 py-0.5 text-xs font-semibold">
          {techProps.badge}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-slate-900">{techProps.name}</h3>

      <p className="mt-1 flex-1 text-sm text-slate-500 leading-relaxed">
        {techProps.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {techProps.category}
        </span>
        <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {techProps.difficulty}
        </span>
        <span className="ml-auto text-xs font-semibold text-amber-500">
          ⭐ {techProps.rating}
        </span>
      </div>

      <button onClick={() => onAdd(techProps)}
        disabled={isAdded}
        className={isAdded ? "mt-4 w-full rounded-xl py-2 text-sm font-semibold bg-slate-100 text-slate-400 cursor-not-allowed" : "mt-4 w-full rounded-xl py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-700"}>
        {isAdded ? "Added ✓" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
