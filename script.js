const increment = document.getElementsByTagName("button")[0];
const decrement = document.getElementsByTagName("button")[1];
const display = document.getElementsByTagName("h2")[0];
 
let number = Number(display.textContent);
 
increment.addEventListener("click", () => {
    number++;
    display.textContent = number;
});
 
decrement.addEventListener("click", () => {
    number--;
    display.textContent = number;
});