const filterWrap = document.querySelector(".products_filter_wrap");
const colorsModal = document.querySelectorAll(".color-selct");
const allColorsCheck = document.querySelector("#checkall");
filterWrap.addEventListener("change", event => {
  const target = event.target;
  if (target.type === "checkbox") {
    // if the target category button
    if (target.dataset.category) {
      const categoryCheckbox = target;
      const brandCheckboxes = document.querySelectorAll(
        ".brands-" + categoryCheckbox.dataset.category
      );
      const productCheckboxes = document.querySelectorAll(
        ".products-" + target.dataset.category + " input"
      );
      brandCheckboxes.forEach(checkbox => {
        checkbox.checked = categoryCheckbox.checked;
      });
      productCheckboxes.forEach(checkbox => {
        checkbox.checked = categoryCheckbox.checked;
      });
      /**********/
      colorsModal.forEach(checkbox => {
        checkbox.checked = categoryCheckbox.checked;
      });
      allColorsCheck.checked = categoryCheckbox.checked;
    } else if (target.dataset.brand) {
      // if target brand button
      const brandCheckbox = target;
      const productCheckboxes = document.querySelectorAll(
        ".products-" + brandCheckbox.dataset.brand
      );
      productCheckboxes.forEach(checkbox => {
        checkbox.checked = brandCheckbox.checked;
      });
      /**********/
      colorsModal.forEach(checkbox => {
        checkbox.checked = brandCheckbox.checked;
      });
      allColorsCheck.checked = brandCheckbox.checked;
    } else if (target.dataset.product) {
      // If it's a product checkbox
      const productCheckbox = target;
      // const colorCheckboxes = document.querySelectorAll(
      //   ".colors-" + productCheckbox.dataset.product
      // );
      // colorCheckboxes.forEach(checkbox => {
      //   checkbox.checked = productCheckbox.checked;
      // });
      /**********/
      colorsModal.forEach(checkbox => {
        checkbox.checked = productCheckbox.checked;
      });
      allColorsCheck.checked = productCheckbox.checked;
    }
  }
});