const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");
const images = document.querySelectorAll(".gallery-image");
const maxItems = images.length;
let currentItem = 0;

function isVisible(element) {
  const position = element.getBoundingClientRect();
  const start = position.top;
  const end = position.bottom;

  if (start >= 0 && end <= window.innerHeight) {
    return true;
  }

  return false;
}

function switchImage() {
  clearInterval();

  images.forEach((image) => {
    image.classList.remove("current-image");
  });

  images[currentItem].classList.add("current-image");

  images[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

buttonNext.addEventListener("click", () => {
  if (currentItem < maxItems - 1) {
    currentItem++;

    switchImage();
  }
});

buttonPrev.addEventListener("click", () => {
  if (currentItem > 0) {
    currentItem--;

    switchImage();
  }
});

window.onload = () => {
  setInterval(() => {
    if (isVisible(images[currentItem])) {
      currentItem++;

      if (currentItem >= maxItems) {
        currentItem = 0;
      }

      switchImage();
    }
  }, 5000);
};
