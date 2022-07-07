import { useState } from "react";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

interface Props {
  onAdd?: (todo: string) => void;
}

export const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState<string>("");

  const handleAdd = () => onAdd && onAdd(value);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a TODO"
          className="p-4 rounded my-1 text-lg w-full"
        />
        <button
          onClick={handleAdd}
          className="border p-4 m-2 rounded shadow bg-white hover:bg-gray-200 active:bg-gray-400 flex flex-row items-center"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
