interface project {
  name: string;
  linktoproject: string;
  linktoinfo: string;
  image: string;
  stack: stack[];
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
    image: "",
    description:
      "MTRAC+ is an all in one platform for Transport Operators to manage their Driving Currency, fill MTRAC+ Forms, and allow Commanders to counter-sign MTRAC+ Forms.",
    stack: [
      {
        name: "React",
        colour: "blue",
      },
      {
        name: "Vue.js",
        colour: "green",
      },
      {
        name: "TailwindCSS",
        colour: "blue",
      },
      {
        name: "Express",
        colour: "black",
      },
    ],
  },
  {
    name: "EMOB+",
    description:
      "EMOB+ is a system developed to streamline the process of Mob Manning by allowing commanders to mark servicemen via a QR Code.",
    linktoproject: "https://emob.ternary.digital",
    linktoinfo: "emob",
    image: "",
    stack: [
      {
        name: "React",
        colour: "blue",
      },
      {
        name: "Vue.js",
        colour: "green",
      },
      {
        name: "TailwindCSS",
        colour: "blue",
      },
      {
        name: "Express",
        colour: "gray",
      },
    ],
  },
  {
    name: "Bibo App",
    linktoproject: "https://emob.ternary.digital",
    description:
      "Bibo app is a web app developed to improve the process of accounting for strength daily",
    linktoinfo: "bibo",
    image: "",
    stack: [
      {
        name: "React",
        colour: "blue",
      },
      {
        name: "Vue.js",
        colour: "green",
      },
      {
        name: "TailwindCSS",
        colour: "blue",
      },
      {
        name: "Express",
        colour: "gray",
      },
    ],
  },
  {
    name: "Bibo Bot",
    linktoproject: "https://emob.ternary.digital",
    description:
      "Bibo Bot is a Telegram Bot Created as an extension of the Bibo App to create on-demand reports.",
    linktoinfo: "bibo",
    image: "",
    stack: [
      {
        name: "React",
        colour: "blue",
      },
      {
        name: "Vue.js",
        colour: "green",
      },
      {
        name: "TailwindCSS",
        colour: "blue",
      },
      {
        name: "Express",
        colour: "gray",
      },
    ],
  },
  {
    name: "Ippt App",
    linktoproject: "https://emob.ternary.digital",
    description:
      "An application created to streamline the process of recording IPPT results digitally.",
    linktoinfo: "bibo",
    image: "",
    stack: [
      {
        name: "React",
        colour: "blue",
      },
      {
        name: "Vue.js",
        colour: "green",
      },
      {
        name: "TailwindCSS",
        colour: "blue",
      },
      {
        name: "Express",
        colour: "gray",
      },
    ],
  },
];

export { projects, project };
