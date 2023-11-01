import type  { Url } from "next/dist/shared/lib/router/router";

type NavLinksType = NavLinkType[];

export type NavLinkType = {
  title: String;
  route: Url;
};

export const navLinks: NavLinksType = [
  { title: "About", route: "/about" },
  { title: "Articles", route: "/posts" },
  { title: "Projects", route: "/projects" },
];
