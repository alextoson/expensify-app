import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test("should render the NotFoundPage correctly", () => {
  var wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
