import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("should render the Header correctly", () => {
  var wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  const onLogoutSpy = jest.fn();
  var wrapper = shallow(<Header startLogout={onLogoutSpy} />);
  wrapper.find("button").simulate("click");
  expect(onLogoutSpy).toHaveBeenCalled();
});
