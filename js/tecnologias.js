const container = document.querySelector(".contenedor");
const items = document.querySelectorAll(".elemento");
const prevButton = document.querySelector(".flecha-izquierda");
const nextButton = document.querySelector(".flecha-derecha");

const itemWidth = items[0].getBoundingClientRect().width;
const visibleItems = Math.floor(container.getBoundingClientRect().width / itemWidth);

let currentPosition = 0;
let targetPosition = 0;
let isPaused = false;

// Clonar elementos al final del contenedor
for (let i = 0; i < visibleItems; i++) {
  const clone = items[i].cloneNode(true);
  container.appendChild(clone);
}

nextButton.addEventListener("click", () => {
  currentPosition += 1;
  container.style.transition = "transform 0.4s ease-in-out";
  container.style.transform = `translateX(${-currentPosition * itemWidth}px)`;

  // Clonar elementos al final del contenedor cuando se alcanza el final
  if (currentPosition >= items.length) {
    currentPosition = 0;
    setTimeout(() => {
      container.style.transition = "none";
      container.style.transform = `translateX(0)`;
    }, 250);
  }
});

prevButton.addEventListener("click", () => {
  currentPosition -= 1;
  container.style.transition = "transform 0.4s ease-in-out";
  container.style.transform = `translateX(${-currentPosition * itemWidth}px)`;

  // Mover al final del contenedor clonado cuando se alcanza el inicio
  if (currentPosition < 0) {
    currentPosition = items.length - 1;
    container.style.transition = "none";
    container.style.transform = `translateX(${-items.length * itemWidth}px)`;

    setTimeout(() => {
      currentPosition = items.length - 2;
      container.style.transition = "transform 0.4s ease-in-out";
      container.style.transform = `translateX(${-currentPosition * itemWidth}px)`;
    }, 0);
  }
});

container.addEventListener("mouseenter", () => {
  isPaused = true;
  container.style.animationPlayState = "paused";
});

container.addEventListener("mouseleave", () => {
  isPaused = false;
  container.style.animationPlayState = "running";
});

// Animación de desplazamiento automático
function animate() {
  if (!isPaused) {
    currentPosition += 0.01;
    container.style.transform = `translateX(${-currentPosition}%)`;

    // Clonar elementos al final del contenedor cuando se alcanza el final
    if (currentPosition >= 100) {
      currentPosition = 0;
      container.style.transform = `translateX(0)`;
    }
  }

  requestAnimationFrame(animate);
}

animate();