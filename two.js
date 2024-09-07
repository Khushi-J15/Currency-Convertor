const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// prmoising chaining 
function getFacts() {
  fetch(URL).then((response) =>{
    console.log(response.headers);
    return response.json(); // changing the format of data .
    
  }).then((data) => {
    factPara.innerText = data[3].text;
    console.log(data[3].text);
    
  })
}

btn.addEventListener("click", getFacts);
// HTTP headers are additional info. attached to response or request .