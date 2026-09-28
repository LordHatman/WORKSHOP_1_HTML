const body = document.body;

const subHeading = document.createElement("h2");

subHeading.textContent = "Texten som ska stå JS";
subHeading.setAttribute("style", "color: red;");
body.append(subHeading);

const mainHeading = document.querySelector("#main-heading");

console.log(mainHeading);

mainHeading.textContent = "Hello from JS";
