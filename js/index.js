let currentLastNumberOfTopWindow , 
    currentIdItem;

let liMenes = document.querySelectorAll("#Menu .list-menu li");

for (let liMene of liMenes) {
  liMene.addEventListener("click", (e) => {
    let currentMenu = document.querySelector("#choseMenu .spacial-card"),
      firstSlide = currentMenu.querySelector(".slide:first-child"),
      lastSlide = currentMenu.querySelector(".slide:last-child");

    if (liMene.dataset.typeMenu == currentMenu.dataset.typeMenu) {
      return 0;
    }

    changeActive(liMene);

    currentMenu.classList.remove("show");

    firstSlide.innerHTML = ``;
    lastSlide.innerHTML = ``;

    if (liMene.dataset.typeMenu == "BreakFast") {
      currentMenu.dataset.typeMenu = "BreakFast";
      BreakFast.forEach(function (item, index) {
        if (index <= 2) {
          firstSlide.innerHTML += `
             <div class="part py-2 mb-3">
              <div class="item ms-md-3">
                <div class="image">
                  <div class="img"></div>
                  <div class="layout">
                    <i
                      class="fa-regular fa-square-plus"
                      data-type-menu="BreakFast"
                      data-menu-id="${item.id}"
                      onclick="openPopupMenu('Menu' , this)"
                    ></i>
                  </div>
                </div>
                <div class="content">
                  <div class="header d-block d-md-flex">
                    <h3 class="main-color me-3 mb-0 mb-md-3">
                      ${item.name}
                    </h3>
                    <div class="line-top-bottom d-none d-sm-flex"></div>
                    <h3 class="price main-color fs-5 ms-sm-3">
                      <span class="fs-5">$</span>${item.price}
                    </h3>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nihil, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            `;
        }
        if (index > 2) {
          lastSlide.innerHTML += `
             <div class="part py-2 mb-3">
              <div class="item ms-md-3">
                <div class="image">
                  <div class="img"></div>
                  <div class="layout">
                    <i
                      class="fa-regular fa-square-plus"
                      data-type-menu="BreakFast"
                      data-menu-id="${item.id}"
                      onclick="openPopupMenu('Menu' , this)"
                    ></i>
                  </div>
                </div>
                <div class="content">
                  <div class="header d-block d-md-flex">
                    <h3 class="main-color me-3 mb-0 mb-md-3">
                      ${item.name}
                    </h3>
                    <div class="line-top-bottom d-none d-sm-flex"></div>
                    <h3 class="price main-color fs-5 ms-sm-3">
                      <span class="fs-5">$</span>${item.price}
                    </h3>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nihil, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
      setTimeout(() => {
        currentMenu.classList.add("show");
      }, 1);
    } else if (liMene.dataset.typeMenu == "Lunch") {
      currentMenu.dataset.typeMenu = "Lunch";
      Lunch.forEach(function (item, index) {
        if (index <= 2) {
          firstSlide.innerHTML += `
             <div class="part py-2 mb-3">
              <div class="item ms-md-3">
                <div class="image">
                  <div class="img"></div>
                  <div class="layout">
                    <i
                      class="fa-regular fa-square-plus"
                      data-type-menu="Lunch"
                      data-menu-id="${item.id}"
                      onclick="openPopupMenu('Menu' , this)"
                    ></i>
                  </div>
                </div>
                <div class="content">
                  <div class="header d-block d-md-flex">
                    <h3 class="main-color me-3 mb-0 mb-md-3">
                      ${item.name}
                    </h3>
                    <div class="line-top-bottom d-none d-sm-flex"></div>
                    <h3 class="price main-color fs-5 ms-sm-3">
                      <span class="fs-5">$</span>${item.price}
                    </h3>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nihil, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            `;
        }
        if (index > 2) {
          lastSlide.innerHTML += `
             <div class="part py-2 mb-3">
              <div class="item ms-md-3">
                <div class="image">
                  <div class="img"></div>
                  <div class="layout">
                    <i
                      class="fa-regular fa-square-plus"
                      data-type-menu="Lunch"
                      data-menu-id="${item.id}"
                      onclick="openPopupMenu('Menu' , this)"
                    ></i>
                  </div>
                </div>
                <div class="content">
                  <div class="header d-block d-md-flex">
                    <h3 class="main-color me-3 mb-0 mb-md-3">
                      ${item.name}
                    </h3>
                    <div class="line-top-bottom d-none d-sm-flex"></div>
                    <h3 class="price main-color fs-5 ms-sm-3">
                      <span class="fs-5">$</span>${item.price}
                    </h3>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nihil, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
      setTimeout(() => {
        currentMenu.classList.add("show");
      }, 1);
    } else if (liMene.dataset.typeMenu == "Dinner") {
      currentMenu.dataset.typeMenu = "Dinner";
      Dinner.forEach(function (item, index) {
        if (index <= 2) {
          firstSlide.innerHTML += `
             <div class="part py-2 mb-3">
              <div class="item ms-md-3">
                <div class="image">
                  <div class="img"></div>
                  <div class="layout">
                    <i
                      class="fa-regular fa-square-plus"
                      data-type-menu="Dinner"
                      data-menu-id="${item.id}"
                      onclick="openPopupMenu('Menu' , this)"
                    ></i>
                  </div>
                </div>
                <div class="content">
                  <div class="header d-block d-md-flex">
                    <h3 class="main-color me-3 mb-0 mb-md-3">
                      ${item.name}
                    </h3>
                    <div class="line-top-bottom d-none d-sm-flex"></div>
                    <h3 class="price main-color fs-5 ms-sm-3">
                      <span class="fs-5">$</span>${item.price}
                    </h3>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nihil, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            `;
        }
        if (index > 2) {
          lastSlide.innerHTML += `
             <div class="part py-2 mb-3">
              <div class="item ms-md-3">
                <div class="image">
                  <div class="img"></div>
                  <div class="layout">
                    <i
                      class="fa-regular fa-square-plus"
                      data-type-menu="Dinner"
                      data-menu-id="${item.id}"
                      onclick="openPopupMenu('Menu' , this)"
                    ></i>
                  </div>
                </div>
                <div class="content">
                  <div class="header d-block d-md-flex">
                    <h3 class="main-color me-3 mb-0 mb-md-3">
                      ${item.name}
                    </h3>
                    <div class="line-top-bottom d-none d-sm-flex"></div>
                    <h3 class="price main-color fs-5 ms-sm-3">
                      <span class="fs-5">$</span>${item.price}
                    </h3>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nihil, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
      setTimeout(() => {
        currentMenu.classList.add("show");
      }, 1);
    } else if (liMene.dataset.typeMenu == "Drinks") {
      currentMenu.dataset.typeMenu = "Drinks";

      Drinks.forEach(function (item, index) {
        if (index <= 2) {
          firstSlide.innerHTML += `
                     <div class="part py-2 mb-3">
                      <div class="item ms-md-3">
                        <div class="image">
                          <div class="img"></div>
                          <div class="layout">
                            <i
                              class="fa-regular fa-square-plus"
                              data-type-menu="Drinks"
                              data-menu-id="${item.id}"
                              onclick="openPopupMenu('Menu' , this)"
                            ></i>
                          </div>
                        </div>
                        <div class="content">
                          <div class="header d-block d-md-flex">
                            <h3 class="main-color me-3 mb-0 mb-md-3">
                              ${item.name}
                            </h3>
                            <div class="line-top-bottom d-none d-sm-flex"></div>
                            <h3 class="price main-color fs-5 ms-sm-3">
                              <span class="fs-5">$</span>${item.price}
                            </h3>
                          </div>
                          <div class="body">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Nihil, incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    `;
        }
        if (index > 2) {
          lastSlide.innerHTML += `
                     <div class="part py-2 mb-3">
                      <div class="item ms-md-3">
                        <div class="image">
                          <div class="img"></div>
                          <div class="layout">
                            <i
                              class="fa-regular fa-square-plus"
                              data-type-menu="Drinks"
                              data-menu-id="${item.id}"
                              onclick="openPopupMenu('Menu' , this)"
                            ></i>
                          </div>
                        </div>
                        <div class="content">
                          <div class="header d-block d-md-flex">
                            <h3 class="main-color me-3 mb-0 mb-md-3">
                              ${item.name}
                            </h3>
                            <div class="line-top-bottom d-none d-sm-flex"></div>
                            <h3 class="price main-color fs-5 ms-sm-3">
                              <span class="fs-5">$</span>${item.price}
                            </h3>
                          </div>
                          <div class="body">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Nihil, incidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
        }
      });
      setTimeout(() => {
        currentMenu.classList.add("show");
      }, 1);
    }
  });
};

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
