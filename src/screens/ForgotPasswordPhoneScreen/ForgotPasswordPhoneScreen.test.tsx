import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ForgotPasswordPhoneScreen from "./ForgotPasswordPhoneScreen";

import "@testing-library/jest-native/extend-expect";

describe("ForgotPasswordPhoneScreen", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByTestId } = render(
      <ForgotPasswordPhoneScreen navigation={navigation} />
    );
    expect(getByTestId("title")).toHaveTextContent("Forgot Password");
    expect(getByTestId("passwordLabel")).toHaveTextContent(
      "Please enter your registered phone number to reset your password"
    );
    expect(getByTestId("resetPasswordButtonText")).toHaveTextContent(
      "Reset Password"
    );
  });

  it("handles reset password button press", async () => {
    const { getByTestId } = render(
      <ForgotPasswordPhoneScreen navigation={navigation} />
    );
    fireEvent.press(getByTestId("resetPasswordButton"));
  });
});
