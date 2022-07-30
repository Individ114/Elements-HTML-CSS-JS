let pictures = document.querySelectorAll(".picture");

for (let slide of pictures) {
      slide.addEventListener("click", () => {
            slideRemove();

            slide.classList.add("active");
      });
}
function slideRemove() {
      pictures.forEach((slide) => {
            slide.classList.remove("active");
      });
}
