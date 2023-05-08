interface SendSMSResponse {
  statusCode: number;
}

const OTPSender = {
  sendSMS: async (phone: string, code: string): Promise<void> => {
    const plusPhone = "+" + phone;
    try {
      const response = await fetch(
        "https://api.jollofdate.com/api/v1/signup/sendsms",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: plusPhone,
            code: code,
          }),
        }
      );

      const responseJson: SendSMSResponse = await response.json();

      if (responseJson.statusCode !== 200) {
        return;
      }
    } catch (err) {
      console.log("Error =", err);
    }
  },
};

export default OTPSender;
