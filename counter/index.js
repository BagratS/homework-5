// console.log(localStorage.res);
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const count = document.querySelector(".count");
let counter = parseInt(localStorage.res) || 0;
count.innerText = counter;
increase.addEventListener("mousedown", () => {
    counter += 1;
    count.innerText = counter;
    localStorage.setItem("res", counter);
})

decrease.addEventListener("mousedown", () => {
    if (counter > 0) {
        counter -= 1;
        count.innerText = counter;
    }
    localStorage.setItem("res", counter);
})

reset.addEventListener("mousedown", () => {
    counter = 0;
    count.innerText = 0;
    localStorage.setItem("res", counter);    
})
