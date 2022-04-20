interface socialicon {
  name: string;
  link: string;
  iconname: icon;
}

enum icon {
  github,
  linkedin,
  instagram,
}

const icons: socialicon[] = [
  {
    name: "Github",
    link: "",
    iconname: icon.github,
  },
  {
    name: "Linkedin",
    link: "",
    iconname: icon.linkedin,
  },
  {
    name: "Instagram",
    link: "",
    iconname: icon.instagram,
  },
];

export default icons;
