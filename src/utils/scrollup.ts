function scrollUpListner() {
  const scrollUp = document.getElementById("scroll-up");

  if (window.scrollY >= 560) {
    scrollUp?.classList.add("show-scroll");
  } else {
    scrollUp?.classList.remove("show-scroll");
  }
}

export const scrollUp = () => {
  window.addEventListener("scroll", scrollUpListner);
};
