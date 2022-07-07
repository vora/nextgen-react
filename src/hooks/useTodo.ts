import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";

interface TodoItem {
  title: string;
  completed: boolean;
}

type TodoState = {
  [id: string]: TodoItem;
};

const LOCAL_STORAGE_KEY = "todo-list";

export const useTodo = () => {
  const [todoState, setTodoState] = useLocalStorage<TodoState>(
    LOCAL_STORAGE_KEY,
    {}
  );

  const addTodo = (todo: TodoItem) => {
    const todoId = uuidv4();
    setTodoState((prevState) => ({
      ...prevState,
      [todoId]: todo,
    }));
  };

  const removeTodo = (id: string) => {
    setTodoState((prevState) => {
      const keys = Object.keys(prevState);
      const filteredKeys = keys.filter((currentKey) => currentKey !== id);

      return filteredKeys.reduce(
        (acc, item) => ({
          ...acc,
          [item]: prevState[item],
        }),
        {}
      );
    });
  };

  const completeTodo = (id: string) => {
    setTodoState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        completed: true,
      },
    }));
  };

  const unCompleteTodo = (id: string) => {
    setTodoState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        completed: false,
      },
    }));
  };

  return {
    state: todoState,
    add: addTodo,
    remove: removeTodo,
    complete: completeTodo,
    unComplete: unCompleteTodo,
  };
};
