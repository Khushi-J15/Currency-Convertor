const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);

// max time we will be using GET request when we use api call .
// here we have used a GET request 

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL); 
  console.log(response); 

  let data = await response.json();

  // console.log(data[2].text);
  factPara.innerText = data[2].text;
}

btn.addEventListener("click", getFacts);

// kisi bhi api se data fetch krne me time lag sakta hai means yeh asynchronous kaam hai therefore we apply await .

console.log("+++++++++");
console.log(4);
console.log(44);
console.log(44444);
console.log(44444444444444444444);
console.log("-------------------");
console.log("************");
