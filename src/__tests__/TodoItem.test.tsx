import renderer from "react-test-renderer";
import { TodoItem } from "~/components";

describe("TodoItem", () => {
  test("should match snapshot when checked", () => {
    const component = renderer.create(
      <TodoItem
        checked={true}
        onClick={() => null}
        onDelete={() => null}
        text="Checked Todo Item"
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("should match snapshot when unchecked", () => {
    const component = renderer.create(
      <TodoItem
        checked={false}
        onClick={() => null}
        onDelete={() => null}
        text="Unchecked Todo Item"
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
