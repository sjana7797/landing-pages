export const showMenu = (toggleId: string, navId: string) => {
  const toggle = document.querySelector(`#${toggleId}`);
  const nav = document.querySelector(`#${navId}`);

  const toggleMenu = () => {
    nav?.classList.toggle("show-menu");
  };

  toggle?.addEventListener("click", toggleMenu);
};

const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu?.classList.remove("show-menu");
};

export function addNavLinksAction() {
  navLinks.forEach((link) => {
    link.addEventListener("click", linkAction);
  });
}
