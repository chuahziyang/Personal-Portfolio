import { MailSlurp } from "mailslurp-client";

interface Contact {
  content: string;
  name: string;
  company?: string;
  email: string;
}

export const useContact = async (contact: Contact) => {
  const runtimeConfig = useRuntimeConfig();
  const { email, slurpApi } = runtimeConfig.public;

  console.log({ email, slurpApi });
  const mailslurp = new MailSlurp({
    apiKey: slurpApi,
  });
  // fetch emails

  const inbox = await mailslurp.createInbox();
  const options = {
    to: [email],
    subject: "asdasd",
    body: contact.name,
  };

  const sent = await mailslurp.sendEmail(inbox.id, options);

  console.log(sent);
};
