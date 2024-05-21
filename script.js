//output (result) elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitButton = document.getElementById("submit-button");

//input elements
let isValid = false;
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");

//error elements
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
submitButton.addEventListener("click", calculateDate);

//day error
inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    dayError.textContent = "Must be a valid date";
    isValid = false;
    inputDay.style.border = "2px solid red";
    return;
  } else {
    isValid = true;
    dayError.textContent = "";
  }
  if (+inputDay.value === 0) {
    isValid = false;
    dayError.textContent = "This field is required";
    return;
  } else {
    dayError.textContent = "";
  }
});

//month error
inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    monthError.textContent = "Must be a valid month";
    isValid = false;
    return;
  } else {
    isValid = true;
    monthError.textContent = "";
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    monthError.textContent = "This field is required";
    return;
  } else {
    isValid = true;
    monthError.textContent = "";
  }
});

//year error
inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > 2024) {
    yearError.textContent = "Must be a valid year";
    isValid = false;
    return;
  } else {
    isValid = true;
    yearError.textContent = "";
  }
  if (+inputYear.value === 0) {
    isValid = false;
    yearError.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    yearError.textContent = "";
  }
});

function calculateDate() {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);

    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("Error");
  }
}
