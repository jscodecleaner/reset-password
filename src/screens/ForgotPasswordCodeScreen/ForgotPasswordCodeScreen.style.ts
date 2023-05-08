import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Style {
  Container: ViewStyle;
  Title: TextStyle;
  PasswordLabel: TextStyle;
  PhoneLabel: TextStyle;
  PasswordInput: TextStyle;
  ResetButton: ViewStyle;
  ResetButtonText: TextStyle;
  otpInputActive: TextStyle;
  otpInputInactive: TextStyle;
  ResendCodeLabel: TextStyle;
  ResendCodeRemainSeconds: TextStyle;
  ResendCodeButton: TextStyle;
  disabledButton: ViewStyle;
}

export default StyleSheet.create<Style>({
  Container: {
    paddingHorizontal: 25,
  },
  Title: {
    fontSize: 42,
    fontWeight: "700",
    color: "#18181F",
    textAlign: "left",
    width: "100%",
  },
  PasswordLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "rgba(24, 24, 31, 0.45)",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  PhoneLabel: {
    fontSize: 17,
    color: "rgba(24, 24, 31, 1)",
    alignSelf: "flex-start",
    marginBottom: 50,
    fontWeight: "500",
  },
  PasswordInput: {
    width: "100%",
    height: 50,
    borderBottomColor: "rgba(31, 31, 51, 0.2)",
    borderBottomWidth: 0.5,
    fontSize: 20,
    paddingLeft: 0,
  },
  ResetButton: {
    width: "100%",
    marginTop: 268,
  },
  ResetButtonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "700",
    backgroundColor: "#5B41EB",
    width: "100%",
    paddingVertical: 16,
    textAlign: "center",
    borderRadius: 15,
  },
  disabledButton: {
    backgroundColor: "#EDEDEF",
    color: "#393940",
  },
  otpInputActive: {
    width: "20%",
    height: 48,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginTop: 70,
  },
  otpInputInactive: {
    width: "20%",
    height: 48,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    marginTop: 70,
  },
  ResendCodeLabel: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
  },
  ResendCodeRemainSeconds: {
    color: "rgba(24, 24, 31, 1)",
  },
  ResendCodeButton: {
    textDecorationLine: "underline",
    color: "#007BFF",
  },
});
