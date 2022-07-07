import { TodoItem as Component } from "~/components";

export default {
  title: "TODO Components/Item",
};

export const UncheckedItem = () => (
  <Component
    onDelete={() => null}
    checked={false}
    text="TODO Item #1"
    onClick={() => null}
  />
);

export const CheckedItem = () => (
  <Component
    onDelete={() => null}
    checked={true}
    text="TODO Item #2"
    onClick={() => null}
  />
);
