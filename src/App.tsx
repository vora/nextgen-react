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

  const renderList = () => {
    if (Object.keys(state).length === 0) {
      return <p className="text-lg text-center">No TODOs Yet</p>;
    }
    return (
      <>
        {Object.keys(state).map((todoKey) => {
          const todo = state[todoKey];
          return (
            <div className="py-1" key={todoKey}>
              <TodoItem
                text={todo.title}
                checked={todo.completed}
                onDelete={() => remove(todoKey)}
                onClick={() => handleItemClick(todoKey)}
              />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="mt-24">
      <TodoLayout>
        <TodoInput onAdd={add} />
        <div className="py-4 px-2">{renderList()}</div>
      </TodoLayout>
    </div>
  );
};

export default App;
