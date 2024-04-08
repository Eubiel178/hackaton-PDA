const controls = document.querySelectorAll(".control");
const images = document.querySelectorAll(".gallery-image");
const maxItems = images.length;
let currentItem = 0;

// automically change img every 5 seconds (start on screen load)
window.onload = () => {
  setInterval(() => {
    // check page offset
    currentItem++;
    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    // remove 'current-image' class from all images
    images.forEach((image) => {
      image.classList.remove("current-image");
    });
    // add 'current-image' class to current image
    images[currentItem].classList.add("current-image");
    images[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, 5000);
};