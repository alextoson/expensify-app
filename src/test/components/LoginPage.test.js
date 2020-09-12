import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should render the LoginPage correctly", () => {
  var wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on button click", () => {
  const onLoginSpy = jest.fn();
  var wrapper = shallow(<LoginPage startLogin={onLoginSpy} />);
  wrapper.find("button").simulate("click");
  expect(onLoginSpy).toHaveBeenCalled();
});
