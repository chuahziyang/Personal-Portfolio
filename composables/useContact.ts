import { MailSlurp } from "mailslurp-client";

interface Contact {
  content: string;
  name: string;
  company?: string;
  email: string;
}

export const useContact = async (contact: Contact) => {
  try {
    const { content, name, company, email: senderemail } = contact;

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
      subject: "New project",
      body: `
      name : ${name}
      company : ${company}
      email :${senderemail}
      content :${content}
      `,
    };

    const sent = await mailslurp.sendEmail(inbox.id, options);

    console.log(sent);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
