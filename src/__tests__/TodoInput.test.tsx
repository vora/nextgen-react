import renderer from "react-test-renderer";
import { TodoInput } from "~/components";

test("TodoInput", () => {
  const component = renderer.create(<TodoInput />);

  expect(component.toJSON()).toMatchSnapshot();
});
