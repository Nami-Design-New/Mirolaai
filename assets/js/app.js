// navlinks highligth by pathname
const { pathname } = window.location;
let navLinks = document.querySelectorAll(".nav-links ul li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.remove("active");
}
for (var i = 0; i < navLinks.length; i++) {
  const linkPathname = new URL(navLinks[i].href).pathname;
  if (linkPathname === pathname) {
    navLinks[i].classList.add("active");
  }
  if (pathname === "/") {
    navLinks[0].classList.add("active");
  }
}
//selectionFunction for all selection just give it the parent selector and target array
//catchChange for un setting selectall btn
function selectionFunction(input, arr) {
  if (input.checked === false) {
    arr.forEach((c) => {
      c.checked = false;
    });
  } else {
    arr.forEach((c) => {
      c.checked = true;
    });
  }
}
// level one parent category selection function
function categorySelectionFunction(input, brandsArr, productsArr) {
  if (input.checked === false) {
    brandsArr.forEach((c) => {
      c.checked = false;
    });
    productsArr.forEach((c) => {
      c.checked = false;
    });
  } else {
    brandsArr.forEach((c) => {
      c.checked = true;
    });
    productsArr.forEach((c) => {
      c.checked = true;
    });
  }
}
function catchChange(arr, target) {
  let countArr = arr.length;
  let checkedAll = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked === true) {
      checkedAll += 1;
    }
  }
  if (checkedAll == countArr) {
    target.checked = true;
  } else {
    target.checked = false;
  }
}
// filters chart
var filtersChartOptions = {
  series: [44, 55, 41, 17, 15],
  labels: ["كحل", "ملمع شفاة", "ماسكرا", "روچ", "احمر خدود"],
  chart: {
    type: "donut",
  },
  colors: ["#c7f9ee", "#6dfdd2", "#1de4bd", "#1bd4d4", "#1ac9e6"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
var chart = new ApexCharts(
  document.querySelector("#filtersChart"),
  filtersChartOptions
);
chart.render();
// most used brands
var mostUsedBrandsOptions = {
  series: [
    {
      name: "SEPHORA",
      data: [35, 40, 20, 50, 10, 30, 40],
    },
    {
      name: "Rare Beauty",
      data: [15, 35, 25, 10, 40, 45, 5],
    },
    {
      name: "Hourglass",
      data: [60, 35, 20, 65, 15, 45, 50],
    },
    {
      name: "Fenty Beauty",
      data: [45, 25, 10, 45, 23, 14, 55],
    },
  ],
  colors: ["#1bd4d4", "#1ac9e6", "#19aade", "#176ba0", "#142459"],
  chart: {
    type: "bar",
    height: 400,
    stacked: true,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  xaxis: {
    categories: ["sa", "su", "mo", "tu", "we", "th", "fr"],
  },
  fill: {
    opacity: 1,
  },
};
var chart = new ApexCharts(
  document.querySelector("#mostusedbrands"),
  mostUsedBrandsOptions
);
chart.render();
//toogler menu
let toggler = document.querySelector(".toogler");
let menu = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("close");
  } else {
    toggler.classList.remove("close");
  }
});
// filepond
$(".filepond-multiple").filepond({
  allowMultiple: true,
});
