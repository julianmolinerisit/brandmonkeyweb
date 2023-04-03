const bannerImages = document.querySelector(".banner-images");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let counter = 0;
const size = bannerImages.children[0].clientWidth;

arrowLeft.addEventListener("click", () => {
  if (counter <= 0) {
    counter = bannerImages.children.length - 1;
  } else {
    counter--;
  }
  bannerImages.style.transform = `translateX(-${size * counter}px)`;
});

arrowRight.addEventListener("click", () => {
  if (counter >= bannerImages.children.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  bannerImages.style.transform = `translateX(-${size * counter}px)`;
});

setInterval(() => {
  if (counter >= bannerImages.children.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  bannerImages.style.transform = `translateX(-${size * counter}px)`;
}, 20000);
