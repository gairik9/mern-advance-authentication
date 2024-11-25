import { MailtrapClient } from "mailtrap";

const TOKEN = "";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Gairik Chakraborty",
};