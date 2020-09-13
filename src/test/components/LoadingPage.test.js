import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../components/LoadingPage";

test("should render the LoadingPage correctly", () => {
  var wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
