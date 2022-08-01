
// declare Variables and get content by document. ...
const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

// set an EventListener on the submitButton
submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"        //when we click the button our mainContainer vanishes
  thanksContainer.classList.remove("hidden")    //and we remove our hidden class, therewith our thanksContainer appears

  ratings.forEach((rating) => {         //for each rating, get the value from .innerHTML
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})