const btn =  document.getElementById("dataBtn")
const result = document.getElementById("advice");
const number = document.getElementById("advice-number")

const url = "https://api.adviceslip.com/advice";

// btn.addEventListener('click', async () => {
//   const response = await fetch(url);
//   const json = await response.json();
//   const {advice, id} = json.slip;
//   number.textContent = id;
//   result.textContent = advice;
// })

fetch("https://api.adviceslip.com/advice")
  .then(response => {
    return response.json();
  }).then(adviceData => {
    result.innerText = `"${adviceData.slip.advice}"`;
    number.innerText = `#${adviceData.slip.id}`
  }).catch(error => {
    console.log(error)
  })
