import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should render the Header correctly", () => {
  var wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});