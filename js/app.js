/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navigationBar = document.getElementById("navbar__list");
const allSections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const navigationBarBuilder = () => {
  let navItems = ``;
  allSections.forEach((section) => {
    const sectionID = section.id;
    const sectionData = section.dataset.nav;
    navItems += `<li> <a class="menu__link" href="#${sectionID}"> ${sectionData} </a> </li>`;
  });
  navigationBar.innerHTML = navItems;
};

navigationBarBuilder();

// Add class 'active' to section when near top of viewport
const Diff = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

const removeActiveSection = (section) => {
  section.classList.remove("your-active-class");
};

const addActiveSection = (active, section) => {
  if (active) {
    section.classList.add("your-active-class");
  }
};

const sectionActivation = () => {
  allSections.forEach((section) => {
    const elementDiff = Diff(section);
    const inviewport = () => {
      return elementDiff < 100 && elementDiff >= -200;
    };
    removeActiveSection(section);
    addActiveSection(inviewport(), section);
  });
};

window.addEventListener("scroll", sectionActivation);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
