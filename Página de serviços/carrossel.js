const carousel = document.querySelector(".carousel"),
  arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff,
  autoSlideInterval;

// Clone o conjunto de imagens e adicione ao final do carrossel
const images = carousel.querySelectorAll("img");
const clonedImages = Array.from(images).map((img) => img.cloneNode(true));
clonedImages.forEach((clonedImg) => carousel.appendChild(clonedImg));

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = carousel.firstElementChild.clientWidth + 14;
    carousel.scrollLeft +=
      icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  let firstImgWidth = carousel.firstElementChild.clientWidth + 14;
  carousel.scrollLeft += firstImgWidth;
  setTimeout(() => showHideIcons(), 60);
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
  stopAutoSlide();
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
  startAutoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// Inicie a reprodução automática quando a página carregar
startAutoSlide();
