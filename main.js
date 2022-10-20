const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

/* Slider Data */
const images = ["/imgs/bg-1.jpg", "/imgs/bg-2.jpg", "/imgs/bg-3.jpg"];
const headings = ["New York City, USA", "Tokyo, Japan", "Dubai, UAE"];
const descriptions = ["The city that never sleeps", "The city of lights", "Home of the tallest skyscraper"];
/* Slider ID */
let id = 0;
/* Slider function */
function slide(id) {
   /* Sets the background image */
   slider.style.backgroundImage = `url(${images[id]})`;
   /* Image fade animation with remover */
   slider.classList.add('image-fade');
   setTimeout(() => {
      slider.classList.remove('image-fade');
   }, 550);
   /* Changes heading */
   heading.innerText = headings[id];
   /* Changes descriptions */
   description.innerText = descriptions[id];
}
arrLeft.addEventListener('click', () => {
   /* Decrements img id */
   id--;
   /* Checks if id is smaller than alloted slides */
   if (id < 0) {
      id = images.length - 1;
   }
   slide(id);
});

/* Adds click event to right arrow */
arrRight.addEventListener('click', () => {
   /* Increments img id */
   id++;
   /* Checks to see if id is greater than alloted slides */
   if (id > images.length - 1) {
      /* Changes to first image */
      id = 0;
   }
   slide(id);
});