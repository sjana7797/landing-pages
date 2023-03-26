function scrollHeaderListener() {
  const header = document.querySelector(".header");
  if (window.scrollY >= 80) {
    header?.classList.add("scroll-header");
  } else {
    header?.classList.remove("scroll-header");
  }
}

export function scrollHeader() {
  window.addEventListener("scroll", scrollHeaderListener);
}
