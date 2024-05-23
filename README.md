# Age-Calculator

Hello everybody! 👋 </br>
✨ Welcome to the Age Calculator Project! The Age Calculator is a simple web application that allows users to calculate their age based on their date of birth. The application takes the user's date of birth as input and calculates the exact age in years, months, and days. This project demonstrates basic JavaScript functionalities, including date manipulation and user input handling.

## 👀 Overview 

### 📷 Screenshot
![screencapture-tucecifci-github-io-Age-Calculator-2024-05-21-12_39_27](https://github.com/tucecifci/Age-Calculator/assets/151346784/3ef38d09-ffe8-4e88-b09b-36e55d263b43)

![screencapture-tucecifci-github-io-Age-Calculator-2024-05-21-12_40_01](https://github.com/tucecifci/Age-Calculator/assets/151346784/3eb9e87b-a727-4a62-92ba-950ea56a691c)

![screencapture-tucecifci-github-io-Age-Calculator-2024-05-21-12_40_32](https://github.com/tucecifci/Age-Calculator/assets/151346784/20392946-4fd2-4501-b93b-3765a0634855)


### 🔗 Links

- https://tucecifci.github.io/Age-Calculator/

## My process

### 💡 Built with

- HTML5: For structuring the web page.
- CSS3: For styling the web page and making it responsive.
- JavaScript: For implementing the logic to calculate the age based on the user's input.

### 🧠 What I learned

Through this project, I gained a deeper understanding of the following concepts:

- JavaScript Date Object: How to work with dates and perform calculations to determine age.
- Event Handling: Capturing user input and triggering functions based on events.
- DOM Manipulation: Updating the web page dynamically based on user interactions.
- Responsive Design: Using CSS to ensure the application looks good on various devices.
- Project Organization: Structuring a simple web project with separate files for HTML, CSS, and JavaScript.

```javascript
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
```
```javascript
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

```

### 👩🏼‍💻 Features

- User-friendly interface for entering the date of birth
- Calculates the exact age in years, months, and days
- Responsive design for use on various devices


### 🤔 How to Use

- Open the application in your web browser.
- Enter your date of birth in the provided input field (format: YYYY-MM-DD).
- Click the "Calculate Age" button.
- View your age displayed in years, months, and days.


### 🤌🏻 Useful resources

- https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub
  

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
