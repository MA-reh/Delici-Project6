function openPopup(namePopup) {
  let popupEle = document.querySelector(
    `.popup[data-popup-name="${namePopup}"]`
  );
  popupEle.firstElementChild.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  popupEle.classList.add("active");
}

function closePopup() {
  let popupEle = document.querySelector(`.popup.active`);
  popupEle.classList.remove("active");
}

function changeActive(that) {
  let currentActive = that.closest(".changeActive").querySelector(".active");
  currentActive.classList.remove("active");
  that.classList.add("active");
}

function changeCarousel(typeOfBtn) {
  if (typeOfBtn == "next") {
    let currentCarousel = document.querySelector(
        "#Home .MA-carousel-item.active"
      ),
      nextCarousel =
        currentCarousel.nextElementSibling ??
        document.querySelector("#Home .MA-carousel-item:first-child");

    currentCarousel.classList.remove("active");
    nextCarousel.classList.add("active");
    updateIndicators(nextCarousel.dataset.index);
  } else if (typeOfBtn == "prev") {
    let currentCarousel = document.querySelector(
        "#Home .MA-carousel-item.active"
      ),
      prevCarousel =
        currentCarousel.previousElementSibling ??
        document.querySelector("#Home .MA-carousel-item:last-child");

    currentCarousel.classList.remove("active");
    prevCarousel.classList.add("active");
    updateIndicators(prevCarousel.dataset.index);
  } else {
    console.log("exit function");
  }
}

function changeCarouselIndicators(that) {
  let currentCarousel = document.querySelector(
      "#Home .MA-carousel-item.active"
    ),
    carouselChangeActive = document.querySelector(
      `#Home .MA-carousel-item[data-index="${that.dataset.index}"]`
    );
  currentCarousel.classList.remove("active");
  carouselChangeActive.classList.add("active");
}

function updateIndicators(indexOfCarousel) {
  let currentIndicatorActive = document.querySelector(
      "#Home .MA-carousel-indicators li.active"
    ),
    newIndicatorActive = document.querySelector(
      `#Home .MA-carousel-indicators li[data-index="${indexOfCarousel}"]`
    );
  currentIndicatorActive.classList.remove("active");
  newIndicatorActive.classList.add("active");
}

function openPopupMenu(typeOfPopup, btn) {
  let popupMenu = document.querySelector(
      `.popup[data-popup-name="${typeOfPopup}"`
    ),
    idOfMenu = btn.dataset.menuId,
    TypeOfMenu = btn.dataset.typeMenu,
    currentMenuItem = allMenu.filter((item) => {
      return item.id == idOfMenu;
    })[0];

  currentIdItem = currentMenuItem.id;

  popupMenu.innerHTML = `
      <div class="box text-center">
        <i class="fa-regular fa-circle-xmark" onclick="closePopup()"></i>
        <div class="title text-center mb-3">
          <h6 class="main-color">SPECIAL SELECTION</h6>
          <img src="images/separator.svg" alt="separator" class="img-fluid" />
        </div>
        <h2 class="mb-4">${currentMenuItem.name}</h2>
        <div class="imgMenu">
          <img src="images/${currentMenuItem.images[0]}" alt="BF-1.webp" class="img-fluid" />

          <button onclick="prevMenu(${currentIdItem} , '${TypeOfMenu}')" class="button-popup prev">
            <i class="fa-solid fa-angle-up"></i>
          </button>
          <button onclick="nextMenu(${currentIdItem} , '${TypeOfMenu}')" class="button-popup next">
            <i class="fa-solid fa-angle-up"></i>
          </button>
          <p class="m-0">$${currentMenuItem.price}</p>
        </div>
        <p class="text-start mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
          reiciendis numquam magnam dolore ratione tenetur eos rem modi
          voluptates obcaecati quidem voluptate mollitia sunt aspernatur odit
          porro possimus ducimus, explicabo quaerat, pariatur illo praesentium
          non delectus inventore? Molestias porro delectus laborum perferendis
          ratione maxime, impedit veniam minus dolor, magnam a.
        </p>
        </div>
      `;

  popupMenu.firstElementChild.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  popupMenu.classList.add("active");
}

function prevMenu(idOfCUrrentMenu, typeOfMenu) {
  let popupMenu = document.querySelector(`.popup[data-popup-name="Menu"`),
    boxPopup = popupMenu.querySelector(".box"),
    prevMenuItem;

  if (typeOfMenu == "BreakFast") {
    prevMenuItem = BreakFast.filter((item) => {
      return idOfCUrrentMenu == BreakFast[0].id
        ? item.id == BreakFast.length
        : item.id == idOfCUrrentMenu - 1;
    })[0];
  } else if (typeOfMenu == "Lunch") {
    prevMenuItem = Lunch.filter((item) => {
      return idOfCUrrentMenu == Lunch[0].id
        ? item.id == Lunch.length + 6
        : item.id == idOfCUrrentMenu - 1;
    })[0];
  } else if (typeOfMenu == "Dinner") {
    prevMenuItem = Dinner.filter((item) => {
      return idOfCUrrentMenu == Dinner[0].id
        ? item.id == Dinner.length + 12
        : item.id == idOfCUrrentMenu - 1;
    })[0];
  } else if (typeOfMenu == "Drinks") {
    prevMenuItem = Drinks.filter((item) => {
      return idOfCUrrentMenu == Drinks[0].id
        ? item.id == Drinks.length + 18
        : item.id == idOfCUrrentMenu - 1;
    })[0];
  }

  boxPopup.innerHTML = `
          <i class="fa-regular fa-circle-xmark" onclick="closePopup()"></i>
        <div class="title text-center mb-3">
          <h6 class="main-color">SPECIAL SELECTION</h6>
          <img src="images/separator.svg" alt="separator" class="img-fluid" />
        </div>
        <h2 class="mb-4">${prevMenuItem.name}</h2>
        <div class="imgMenu">
          <img src="images/${prevMenuItem.images[0]}" alt="BF-1.webp" class="img-fluid" />

          <button onclick="prevMenu(${prevMenuItem.id} , '${typeOfMenu}')" class="button-popup prev">
            <i class="fa-solid fa-angle-up"></i>
          </button>
          <button onclick="nextMenu(${prevMenuItem.id} , '${typeOfMenu}')" class="button-popup next">
            <i class="fa-solid fa-angle-up"></i>
          </button>
          <p class="m-0">$${prevMenuItem.price}</p>
        </div>
        <p class="text-start mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
          reiciendis numquam magnam dolore ratione tenetur eos rem modi
          voluptates obcaecati quidem voluptate mollitia sunt aspernatur odit
          porro possimus ducimus, explicabo quaerat, pariatur illo praesentium
          non delectus inventore? Molestias porro delectus laborum perferendis
          ratione maxime, impedit veniam minus dolor, magnam a.
        </p>
  `;
}

function nextMenu(idOfCUrrentMenu, typeOfMenu) {
  console.log(typeOfMenu);

  let popupMenu = document.querySelector(`.popup[data-popup-name="Menu"`),
    boxPopup = popupMenu.querySelector(".box"),
    nextMenuItem;

  if (typeOfMenu == "BreakFast") {
    nextMenuItem = BreakFast.filter((item) => {
      return idOfCUrrentMenu == BreakFast.length
        ? item.id == BreakFast[0].id
        : item.id == idOfCUrrentMenu + 1;
    })[0];
  } else if (typeOfMenu == "Lunch") {
    nextMenuItem = Lunch.filter((item) => {
      return idOfCUrrentMenu == Lunch.length + 6
        ? item.id == Lunch[0].id
        : item.id == idOfCUrrentMenu + 1;
    })[0];
  } else if (typeOfMenu == "Dinner") {
    nextMenuItem = Dinner.filter((item) => {
      return idOfCUrrentMenu == Dinner.length + 12
        ? item.id == Dinner[0].id
        : item.id == idOfCUrrentMenu + 1;
    })[0];
  } else if (typeOfMenu == "Drinks") {
    nextMenuItem = Drinks.filter((item) => {
      return idOfCUrrentMenu == Drinks.length + 18
        ? item.id == Drinks[0].id
        : item.id == idOfCUrrentMenu + 1;
    })[0];
  }

  boxPopup.innerHTML = `
            <i class="fa-regular fa-circle-xmark" onclick="closePopup()"></i>
          <div class="title text-center mb-3">
            <h6 class="main-color">SPECIAL SELECTION</h6>
            <img src="images/separator.svg" alt="separator" class="img-fluid" />
          </div>
          <h2 class="mb-4">${nextMenuItem.name}</h2>
          <div class="imgMenu">
            <img src="images/${nextMenuItem.images[0]}" alt="${nextMenuItem.images[0]}" class="img-fluid" />
  
            <button onclick="prevMenu(${nextMenuItem.id} , '${typeOfMenu}')" class="button-popup prev">
              <i class="fa-solid fa-angle-up"></i>
            </button>
            <button onclick="nextMenu(${nextMenuItem.id} , '${typeOfMenu}')" class="button-popup next">
              <i class="fa-solid fa-angle-up"></i>
            </button>
            <p class="m-0">$${nextMenuItem.price}</p>
          </div>
          <p class="text-start mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            reiciendis numquam magnam dolore ratione tenetur eos rem modi
            voluptates obcaecati quidem voluptate mollitia sunt aspernatur odit
            porro possimus ducimus, explicabo quaerat, pariatur illo praesentium
            non delectus inventore? Molestias porro delectus laborum perferendis
            ratione maxime, impedit veniam minus dolor, magnam a.
          </p>
    `;
}
