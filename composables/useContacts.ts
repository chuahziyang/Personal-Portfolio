interface Contact {
  content: string;
  name: string;
  company?: string;
  email: string;
}

export const useContacts = async (contact: Contact) => {
  const { content, name, company, email: senderemail } = contact;

  const { data: status } = await useFetch("/api/email", {
    params: {
      subject: company,
      html: `name: ${name} <br/> company: ${company} <br/> email: ${senderemail} <br/> content: ${content}`,
    },
  });

  console.log(status.value);

  return status.value;
};
