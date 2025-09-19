let currentLastNumberOfTopWindow,
  currentIdItem,
  liMenes = document.querySelectorAll("#Menu .list-menu li");

for (let liMene of liMenes) {
  liMene.addEventListener("click", (e) => {
    let currentMenu = document.querySelector("#choseMenu .spacial-card");

    if (liMene.dataset.typeMenu == currentMenu.dataset.typeMenu) return 0;

    changeActive(liMene);
    currentMenu.classList.remove("show");

    currentMenu.dataset.typeMenu = liMene.dataset.typeMenu;

    let currentMenuArr = allMenu.filter((item) => { return item.type === currentMenu.dataset.typeMenu; });
    changeContentOfMenu(currentMenuArr);
    setTimeout(() => {
      currentMenu.classList.add("show");
    }, 1);
  });
}

window.addEventListener("scroll", () => {
  let topOfWindow = window.scrollY;

  let sectionNames = [
    "Home",
    "About",
    "Story",
    "Special",
    "Menu",
    "Chefs",
    "Contact",
  ];

  if (currentLastNumberOfTopWindow < topOfWindow) {
    Navbar.classList.add("scrollDown");
  } else if (currentLastNumberOfTopWindow > topOfWindow) {
    Navbar.classList.remove("scrollDown");
  }

  currentLastNumberOfTopWindow = topOfWindow;

  for (let sectionName of sectionNames) {
    let currentSection = document.querySelector(`#${sectionName}`),
      idOfSection = currentSection.id,
      navBarItemActive = document.querySelector(
        `#Navbar .links .nav-links.active`
      ),
      navBarItemBeforeActive = document.querySelector(
        `#Navbar .links .nav-links[href="#${idOfSection}"]`
      ),
      slidBarItemActive = document.querySelector(
        `.popup[data-popup-name="nav"] .listSideBar .linkNavSidebar.active`
      ),
      slidBarItemBeforeActive = document.querySelector(
        `.popup[data-popup-name="nav"] .listSideBar .linkNavSidebar[href="#${idOfSection}"]`
      ),
      topOfCurrentSection = currentSection.offsetTop - 10,
      hightOfCurrentSection = topOfCurrentSection + currentSection.clientHeight;

    if (
      topOfWindow >= topOfCurrentSection &&
      topOfWindow < hightOfCurrentSection
    ) {
      navBarItemActive.classList.remove("active");
      slidBarItemActive.classList.remove("active");
      navBarItemBeforeActive.classList.add("active");
      slidBarItemBeforeActive.classList.add("active");
    }
  }

  if (topOfWindow >= 10) {
    Navbar.classList.add("scrolled");
  } else {
    Navbar.classList.remove("scrolled");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  Loading.classList.add("d-none");
});