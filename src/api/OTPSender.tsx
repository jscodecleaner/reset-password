import { Alert } from 'react-native';

const OTPSender = {
  sendSMS: async( phone, code, userAction) => {
    const plusPhone = '+' + phone
    fetch( 'https://api.jollofdate.com/api/v1/signup/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        phone: plusPhone,
        code: code,
    }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('sendSMS response =', responseJson)
        if (responseJson.statusCode !== 200) {
          return;
        }
    })
    .catch((err) => {
        console.log('Error =', err)
        // Alert.alert('Network Error', 'Please check your network connection and try again.')
    });
  },
};

export default OTPSender;