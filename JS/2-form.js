const feedbackForm = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

const savedInput = localStorage.getItem("feedback-form-state");
if (savedInput) {
  formData = JSON.parse(savedInput);
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

feedbackForm.addEventListener("input", (event) => {
  const keyName = event.target.name;
  const value = event.target.value;
  if (keyName == "email" || keyName === "message") {
    formData[keyName] = value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
});

function displayData() {
  const savedState = localStorage.getItem("feedback-form-state");
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    document.getElementById(
      "savedData"
    ).innerText = `Email: ${parsedState.email}\nMessage: ${parsedState.message}`;
  } else {
    document.getElementById("savedData").innerText = "";
  }
}

// displayData();

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isFilled = true;
  if (
    formData["email"] == "" ||
    formData["message"] == "" ||
    feedbackForm.elements.email.value == "" ||
    feedbackForm.elements.message.value == ""
  ) {
    isFilled = false;
    alert("Please fill all the fields!");
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    feedbackForm.reset();
    // displayData();
  }
});
