const [form, inputEmail, errorSpan, emailRegex] = [document.querySelector("form"), document.getElementById("inputEmail"), document.getElementById("errorSpan"), (e) => /^[a-zA-Z0-9]{1,}@[a-zA-Z0-9]+\.\w{1,3}?$/g.test(e)]

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputEmail.value) [inputEmail.style.border, errorSpan.style.display, errorSpan.textContent] = [".0625em solid border", "block", "Enter an email address"];
  else if (!emailRegex(inputEmail.value)) [errorSpan.style.display, errorSpan.textContent] = ["block", "Please enter a valid email address"];
  else [errorSpan.style.display, errorSpan.textContent] = ["none", ""];
});