let myButton = document.getElementById("switch");

myButton.addEventListener("click", (e) => {
  let para = document.querySelectorAll(".toggle-content");
  para.forEach((e) => {
    if (e.classList.contains("is-visible")) {
      e.classList.remove("is-visible");
      e.classList.add("not-visible");
    } else {
      e.classList.add("is-visible");
    }
  });
});
