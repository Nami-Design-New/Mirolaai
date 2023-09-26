/********try on swipers*********/
// categories slider
let categoriesSlider = new Swiper(".categories-slider", {
  spaceBetween: 0,
  direction: "vertical",
  grabCursor: true,
  slidesPerView: 6
});
// brands slider
let brandsSlider = new Swiper(".brands-slider", {
  spaceBetween: 0,
  direction: "vertical",
  grabCursor: true,
  slidesPerView: 4
});
// colors slider
let colorsSlider = new Swiper(".colors-slider", {
  spaceBetween: 0,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 9
    },
    768: {
      slidesPerView: 5
    },
    350: {
      slidesPerView: 5
    }
  }
});
/*************levels update**************** */
let categoriesSlides = document.querySelectorAll(
  ".categories-slider .swiper-slide"
);
let swipersWrapper = document.querySelector(".categories-brands-swipers");
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
// expanding button
expandBtn.addEventListener("click", () => {
  swipersWrapper.classList.remove("brands-show");
  selectedItem.classList.remove("show");
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
/*advertisments show hide if user not active for 10s*/
let isblock = false;
const delayTime = 300000;
function showAdvertisements() {
  const advertisementsWrap = document.querySelector(".advertisments_wrap");
  if (advertisementsWrap) {
    advertisementsWrap.style.display = "block";
    isblock = true;
  }
  if (isblock === true) {
    // advertisments slider
    const mainSlider = new Swiper(".mainSliderContainer", {
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".mainSliderPagination",
        clickable: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      on: {
        init: function() {
          setAutoplayDelay(this);
        },
        slideChange: function() {
          pauseAllVideos();
          const activeSlide = this.slides[this.activeIndex];
          const activeVideo = activeSlide.querySelector(
            ".mainSliderContainer video"
          );
          if (activeVideo) {
            activeVideo.play();
            setAutoplayDelay(this);
          }
        }
      }
    });
    // advertisement swiper
    function calculateAutoplayDelay(video, minimumDelay) {
      if (video) {
        const videoDuration = video.duration * 1000;
        return Math.max(videoDuration, minimumDelay);
      }
      return minimumDelay;
    }
    function setAutoplayDelay(slider) {
      const activeSlide = slider.slides[slider.activeIndex];
      const activeVideo = activeSlide.querySelector(
        ".mainSliderContainer video"
      );
      const autoplayDelay = calculateAutoplayDelay(activeVideo, 8000);
      slider.params.autoplay.delay = autoplayDelay;
      slider.autoplay.start();
      console.log("Swiper Autoplay Delay:", autoplayDelay);
    }
    // Function to pause all videos
    function pauseAllVideos() {
      const allVideos = document.querySelectorAll(".mainSliderContainer video");
      allVideos.forEach(function(video) {
        video.pause();
      });
    }
  }
}
let timer;
function startTimer() {
  clearTimeout(timer);
  timer = setTimeout(showAdvertisements, delayTime);
}
document.addEventListener("mousemove", startTimer);
document.addEventListener("touchstart", startTimer);
startTimer();
let close_wrap = document.querySelector(".close_wrap");
close_wrap.addEventListener("click", () => {
  document.querySelector(".advertisments_wrap").style.display = "none";
  isblock = false;
});
// open categories
let openCategories = document.querySelector(".open-categories");
let categoriesBrandsSwipers = document.querySelector(
  ".categories-brands-swipers"
);
openCategories.addEventListener("click", () => {
  categoriesBrandsSwipers.classList.toggle("show");
  openCategories.classList.toggle("move");
  if (openCategories.classList.contains("move")) {
    openCategories.querySelector(
      "button"
    ).innerHTML = `<i class="fa-sharp fa-light fa-bars-staggered"></i>`;
  } else {
    openCategories.querySelector(
      "button"
    ).innerHTML = `<i class="fa-sharp fa-light fa-bars"></i>`;
  }
});
