import renderer from "react-test-renderer";
import { TodoLayout } from "~/components";

test("TodoLayout", () => {
  const component = renderer.create(
    <TodoLayout>
      <p>Children</p>
    </TodoLayout>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
