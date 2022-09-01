const links: link[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact me",
    link: "/contact",
  },
];

interface link {
  name: string;
  link: string;
}

export default links;
