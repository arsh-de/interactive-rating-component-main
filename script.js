const buttons = document.querySelectorAll(".button");
const submitbtn = document.querySelector("#submit-button");
const thanks = document.querySelector(".thank-you");
const ratings = document.querySelector(".rating-container");
const rated = document.querySelector("#rated");


let buttonText = "";
for (const button of buttons) {
    button.addEventListener("click", () => {
        for (const btn of buttons) { btn.classList.remove("button-selected"); }
        button.classList.add("button-selected");
        buttonText = button.textContent;
    })
}
submitbtn.addEventListener("click", () => {
    if (buttonText) {
        thanks.classList.remove("none");
        ratings.classList.add("none");
        rated.textContent = buttonText;
    }
    else (
        alert("Please select a rating!")
    )
})
