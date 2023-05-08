import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ForgotPasswordCodeScreen from "./ForgotPasswordCodeScreen";

import "@testing-library/jest-native/extend-expect";

describe("ForgotPasswordCodeScreen", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const route = {
    params: {
      countryCode: "1",
      wholePhonenumber: "1234567890",
    },
  };

  it("renders correctly", () => {
    const { getByTestId } = render(
      <ForgotPasswordCodeScreen navigation={navigation} route={route} />
    );
    expect(getByTestId("title")).toHaveTextContent("Forgot Password");
    expect(getByTestId("passwordLabel")).toHaveTextContent(
      "Enter the 4-digit code sent to you at"
    );
    expect(getByTestId("phoneLabel")).toHaveTextContent("1 234567890");
  });

  it("handles reset password button press", async () => {
    const { getByTestId } = render(
      <ForgotPasswordCodeScreen navigation={navigation} route={route} />
    );
    fireEvent.press(getByTestId("resetPasswordButton"));
  });
});
