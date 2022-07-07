import { TodoInput, TodoItem, TodoLayout } from "./components";
import { useTodo } from "./hooks/useTodo";

const App = () => {
  const { state, add, remove, complete, unComplete } = useTodo();

  const handleItemClick = (itemId: string) => {
    const isCompleted = state[itemId].completed;
    if (isCompleted) {
      unComplete(itemId);
    } else {
      complete(itemId);
    }
  };

  return (
    <div className="mt-24">
      <TodoLayout>
        <TodoInput onAdd={add} />
        <div className="py-4 px-2">
          {Object.keys(state).map((todoKey) => {
            const todo = state[todoKey];
            return (
              <div className="py-1" key={todoKey}>
                <TodoItem
                  text={todo.title}
                  checked={todo.completed}
                  onClick={() => handleItemClick(todoKey)}
                />
              </div>
            );
          })}
        </div>
      </TodoLayout>
    </div>
  );
};

export default App;
