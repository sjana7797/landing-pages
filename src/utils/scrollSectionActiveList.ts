const sections = document.querySelectorAll<HTMLElement>("section[id]");

function scrollActiveListner() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;

    const sectionTop = section.offsetTop - 50;

    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*="${sectionId}"]`)
        ?.classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*="${sectionId}"]`)
        ?.classList.remove("active-link");
    }
  });
}

export function scrollActive() {
  window.addEventListener("scroll", scrollActiveListner);
}
