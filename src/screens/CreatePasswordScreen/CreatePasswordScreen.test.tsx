import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CreatePasswordScreen from "./CreatePasswordScreen";

import "@testing-library/jest-native/extend-expect";

describe("CreatePasswordScreen", () => {
  const navigation = {
    navigate: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByTestId } = render(
      <CreatePasswordScreen navigation={navigation} />
    );
    expect(getByTestId("title")).toHaveTextContent("Create Password");
    expect(getByTestId("passwordLabel")).toHaveTextContent("Password");
  });

  it("handles reset password button press", async () => {
    const { getByTestId } = render(
      <CreatePasswordScreen navigation={navigation} />
    );
    fireEvent.press(getByTestId("resetPasswordButton"));
  });

  it("toggles password visibility and renders the correct image", () => {
    const { getByTestId } = render(
      <CreatePasswordScreen navigation={navigation} />
    );

    // Initial state: isPasswordVisible is false, so eyeImage should be rendered
    expect(getByTestId("eyeImage")).toBeTruthy();
    expect(() => getByTestId("eyeImageHide")).toThrow();

    // Toggle password visibility
    fireEvent.press(getByTestId("togglePasswordVisibility"));

    // After toggling: isPasswordVisible is true, so eyeImageHide should be rendered
    expect(getByTestId("eyeImageHide")).toBeTruthy();
    expect(() => getByTestId("eyeImage")).toThrow();

    // Toggle password visibility back
    fireEvent.press(getByTestId("togglePasswordVisibility"));

    // After toggling back: isPasswordVisible is false, so eyeImage should be rendered again
    expect(getByTestId("eyeImage")).toBeTruthy();
    expect(() => getByTestId("eyeImageHide")).toThrow();
  });
});
