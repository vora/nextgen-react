import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TodoLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <div className="border max-w-2xl rounded-lg shadow">
        <div className="bg-blue-500 p-4 text-center rounded-t-lg">
          <h1 className="text-white text-2xl font-bold">TODO List</h1>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
