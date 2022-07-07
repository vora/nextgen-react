import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TodoLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <p>Todo Layout</p>
      {children}
    </div>
  );
};
