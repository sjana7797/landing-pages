import "boxicons";
import "./scss/style.scss";
import { scrollHeader } from "./utils/backgroundHeader";
import { scrollActive } from "./utils/scrollSectionActiveList";
import { showMenu, addNavLinksAction } from "./utils/showMenu";
import { scrollUp } from "./utils/scrollup";
import { toggleTheme } from "./utils/darkThemeToggle";

showMenu("nav-toggle", "nav-menu");

addNavLinksAction();

scrollActive();

scrollHeader();

scrollUp();

toggleTheme();
