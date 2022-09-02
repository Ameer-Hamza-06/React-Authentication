import { sendEmail } from "../../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "hamzanawaz6776+test1@gmail.com",
        from: "hamzanawaz6776@gmail.com",
        subject: "Does this work",
        text: "If you're reading this... yes!",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
