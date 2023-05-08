import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

// Extend Jest matchers with @testing-library/jest-native matchers
import "@testing-library/jest-native/extend-expect";

describe("LoginScreen", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <LoginScreen navigation={navigation} />
    );
    expect(getByTestId("loginButton")).toHaveTextContent("Login");
    expect(getByText("Password")).toBeTruthy();
    expect(getByText("Forgot Password?")).toBeTruthy();
    expect(getByText("Login with Phone Number")).toBeTruthy();
  });

  it("navigates to ForgotPasswordPhoneScreen on Forgot Password button press", () => {
    const { getByTestId } = render(<LoginScreen navigation={navigation} />);
    fireEvent.press(getByTestId("forgotPasswordButton"));
    expect(navigation.navigate).toHaveBeenCalledWith(
      "ForgotPasswordPhoneScreen"
    );
  });

  it("handles login with phone button press", () => {
    const { getByTestId } = render(<LoginScreen navigation={navigation} />);
    fireEvent.press(getByTestId("loginWithPhoneButton"));
  });

  it("handles login button press", () => {
    const { getByTestId } = render(<LoginScreen navigation={navigation} />);
    fireEvent.press(getByTestId("loginButton"));
  });
});
