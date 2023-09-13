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
    arr.forEach(c => {
      c.checked = false;
    });
  } else {
    arr.forEach(c => {
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
/**************** ***************/
/**************** ***************/
