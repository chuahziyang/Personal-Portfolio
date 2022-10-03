interface project {
  name: string;
  linktoproject: string;
  linktoinfo: string;
  image: string;
  description: string;
}

export interface stack {
  name: string;
  colour: string;
}

const projects: project[] = [
  {
    name: "MTRAC+",
    linktoproject: "https://mtrac.ternary.digital",
    linktoinfo: "mtrac",
    image: "mtraccover",
    description:
      "MTRAC+ is an all in one platform for Transport Operators to manage their Driving Currency, fill MTRAC+ Forms, and allow Commanders to counter-sign MTRAC+ Forms.",
  },
  {
    name: "EMOB+",
    description:
      "EMOB+ is a system developed to streamline the process of Mob Manning by allowing commanders to mark servicemen via a QR Code.",
    linktoproject: "https://e-mob.herokuapp.com/",
    linktoinfo: "emob",
    image: "emobcover",
  },
  {
    name: "Bibo App",
    linktoproject: "https://emob.ternary.digital",
    description:
      "Bibo app is a web app developed to improve the process of accounting for strength daily",
    linktoinfo: "bibo",
    image: "bibocover",
  },
  {
    name: "Resource Management app",
    linktoproject: "https://emob.ternary.digital",
    description: "TODO LALALA",
    linktoinfo: "resource-management-app",
    image: "bibocover",
  },
  {
    name: "Checklist App",
    linktoproject: "https://emob.ternary.digital",
    description: "TODO LALALA",
    linktoinfo: "checklist",
    image: "bibocover",
  },

  // {
  //   name: "Ippt App",
  //   linktoproject: "https://emob.ternary.digital",
  //   description:
  //     "An application created to streamline the process of recording IPPT results digitally.",
  //   linktoinfo: "bibo",
  //   image: "",
  //   stack: [
  //     {
  //       name: "React",
  //       colour: "blue",
  //     },
  //     {
  //       name: "Vue.js",
  //       colour: "green",
  //     },
  //     {
  //       name: "TailwindCSS",
  //       colour: "blue",
  //     },
  //     {
  //       name: "Express",
  //       colour: "gray",
  //     },
  //   ],
  // },
];

export { projects, project };
