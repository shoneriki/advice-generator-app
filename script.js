const btn =  document.getElementById("dataBtn")
const result = document.getElementById("advice");
const number = document.getElementById("advice-number")

const url = "https://api.adviceslip.com/advice";



fetch(url)
  .then(response => {
    return response.json();
  }).then(adviceData => {
    result.innerText = `"${adviceData.slip.advice}"`;
    number.innerText = `#${adviceData.slip.id}`
  }).catch(error => {
    console.log(error)
  })
