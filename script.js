const result = document.getElementById("advice");
const number = document.getElementById("advice-number")
const btn=  document.getElementById("getData")

fetch("https://api.adviceslip.com/advice")
  .then(response => {
    return response.json();
  }).then(adviceData => {
    console.log(adviceData);
    result.innerText = `"${adviceData.slip.advice}"`;
    number.innerText = `#${adviceData.slip.id}`
  }).catch(error => {
    console.log(error)
  })
