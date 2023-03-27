export const changePageTitle = (pathName, title) => {
  pathName === "/" && (document.title = title);
};
