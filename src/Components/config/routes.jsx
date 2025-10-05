export const routes = [
  {
    path: "Home",
    name: "Home",
    showInNav: true,
  },
  {
    path: "Portfolio",
    name: "Portfolio",
    showInNav: true,
  },
  {
    path: "About",
    name: "About",
    showInNav: true,
  },
  // {
  //   path: "Videos",
  //   name: "Videos",
  //   showInNav: true,
  // },
  {
    path: "Contact",
    name: "Contact",
    showInNav: true,
  },
];

export const getNavigationRoutes = () => {
  return routes.filter((route) => route.showInNav);
};
