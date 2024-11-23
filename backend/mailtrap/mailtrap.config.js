import { MailtrapClient } from "mailtrap";

const TOKEN = "cecf5948e45ef18f296d75a5634c2de2";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Gairik Chakraborty",
};