const usd = document.querySelector("#first-money .take-money");
const amd = document.querySelector("#second-money .give-money");
usd.addEventListener("input", () => {
    amd.value = usd.value * 492;
})
amd.addEventListener("input", () => {
    usd.value = amd.value / 492; 
})