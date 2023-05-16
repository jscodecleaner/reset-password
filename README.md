# Reset Password

This is the react native test simple app for reset password module

# Requirements

- Design link
  https://www.figma.com/file/EG3nAA3zkZo78mtcy4n8gE/Test?type=design&node-id=0-1&t=46EoPO0zPkGLkDsb-0

# How to run this app

- Clone this repository. "git clone https://github.com/jsdevdancer/reset-password.git"
- Install packages. "cd reset-password" "yarn"
- If you run the emulator on the mac, pod install "cd ios" "pod install" "cd .."
- Run metro server "yarn start"
- Run this app "npx react-native run-android" or "npx react-native run-ios"

# How does this onboading work

- On the Login screen, press the "Forgot Password?" button.
- On the Forgot Password screen, select country number and enter your phone number then click "Reset password" button.
- Enter the OTP code you received on your phone. if you entered the correct OTP code, "Reset Password" button will be enabled.
  If you didn't received the code, you can resend the code in 60 seconds with click the "resend it" button
- Enter your new password. If your new password is matching with the three requirements, the "Reset Password" button will be enabled.
