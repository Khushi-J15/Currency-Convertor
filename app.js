const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// const p  = fetch(BASE_URL);
// console.log(p);

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let msg = document.querySelector("form .msg");

// for (code in countryList){
//   // currency-code , country-code 
//   console.log(code, countryList[code]);
// }

for (let select of dropdowns) {

  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    }
    else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  })
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");

  let amountVal = amount.value;
  // console.log(amountVal);
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }

  // console.log(fromCurr.value, toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  let finalAmount = amountVal * rate;
  msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

} 

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];

  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}

btn.addEventListener("click", (event) => {
  event.preventDefault(); // page will not refresh automatically.
  updateExchangeRate();
})

window.addEventListener("load", () => {
  updateExchangeRate();
 })
 
 document.getElementById("inputField").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action
      document.getElementById("convertButton").click(); // Trigger the button click
  }
});