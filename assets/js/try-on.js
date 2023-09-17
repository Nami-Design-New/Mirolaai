/********try on swipers*********/
// categories slider
let categoriesSlider = new Swiper(".categories-slider", {
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 5
});
// brands slider
let brandsSlider = new Swiper(".brands-slider", {
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 4
});
// colors slider
let colorsSlider = new Swiper(".colors-slider", {
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 4
});
/*************levels update**************** */
let categoriesSlides = document.querySelectorAll(
  ".categories-slider .swiper-slide"
);
let brandsSlides = document.querySelectorAll(".brands-slider .swiper-slide");
let swipersWrapper = document.querySelector(".main-swipers-wrap");
let selectedItem = document.querySelector(".selected_item");
let expandBtn = document.querySelector(".expand");
// from level 1 to level 2 function
categoriesSlides.forEach(slide => {
  slide.addEventListener("click", e => {
    swipersWrapper.classList.add("brands-show");
    selectedItem.classList.add("show");
    // *************** //
    let clickedItem = e.target.closest(".swiper-slide");
    let clickedItemImageSrc, clickedItemName;
    if (clickedItem) {
      clickedItemImageSrc = clickedItem.querySelector(".icon img").src;
      clickedItemName = clickedItem.querySelector("h6").innerHTML;
    }
    selectedItem.querySelector(".icon img").src = clickedItemImageSrc;
    selectedItem.querySelector("h6").innerHTML = clickedItemName;
  });
});
//from level 2 to level 3 function
brandsSlides.forEach(slide => {
  slide.addEventListener("click", e => {
    swipersWrapper.classList.add("colors-show");
    let clickedItem = e.target.closest(".swiper-slide");
    let clickedItemImageSrc, clickedItemName;
    if (clickedItem) {
      clickedItemImageSrc = clickedItem.querySelector(".icon img").src;
      clickedItemName = clickedItem.querySelector("h6").innerHTML;
    }
    selectedItem.querySelector(".icon img").src = clickedItemImageSrc;
    selectedItem.querySelector("h6").innerHTML = clickedItemName;
  });
});
// expanding button
expandBtn.addEventListener("click", () => {
  if (
    swipersWrapper.classList.contains("brands-show") &&
    swipersWrapper.classList.contains("colors-show")
  ) {
    swipersWrapper.classList.remove("colors-show");
  } else {
    swipersWrapper.classList.remove("brands-show");
    selectedItem.classList.remove("show");
  }
});
// text trim
$(document).ready(function() {
  $(".brands-slider h6").each(function() {
    var text = $(this).text();
    if (text.length > 12) {
      var truncatedText =
        $.trim(text).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
});
