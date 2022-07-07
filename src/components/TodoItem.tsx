import clsx from "clsx";

const UncheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    className="fill-blue-600"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

const CheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    className="fill-green-600"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

interface Props {
  checked: boolean;
  onClick: () => void;
  onDelete: () => void;
  text: string;
}

export const TodoItem: React.FC<Props> = ({
  checked,
  onClick,
  onDelete,
  text,
}) => {
  const textClasses = clsx(
    "text-lg",
    "font-medium",
    checked && "line-through",
    checked ? "text-gray-500" : "text-gray-800"
  );

  return (
    <div className="flex flex-row items-center justify-between">
      <p className={textClasses}>{text}</p>
      <div className="flex flex-row items-center">
        {checked && (
          <button
            onClick={onDelete}
            className="text-xs text-red-700 border p-1 rounded"
          >
            Delete
          </button>
        )}
        <button onClick={onClick} className="ml-2">
          {checked ? <CheckedIcon /> : <UncheckedIcon />}
        </button>
      </div>
    </div>
  );
};
