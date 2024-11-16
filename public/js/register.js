document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  register();
});

function register() {
  let username = document.querySelector("#inputUsername").value;
  let email = document.querySelector("#inputEmail").value;
  let password = document.querySelector("#inputPassword").value;
  let confirmPassword = document.querySelector("#inputConfirmPassword").value;

  if (
    username == "" ||
    email == "" ||
    password == "" ||
    confirmPassword == ""
  ) {
    alert("Campo(s) em branco!");
    return false;
  } else {
    setTimeout(3000);
  }

  fetch("../users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      serverUsername: username,
      serverEmail: email,
      serverPassword: password,
    }),
  })
    .then(function (answer) {
      console.log(answer);

      if (answer.ok) {
        setTimeout(() => {
          window.location = "login.html";
        }, 1000);

        clearForm();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  return false;
}

function clearForm() {
  document.querySelector("#inputUsername").value = "";
  document.querySelector("#inputEmail").value = "";
  document.querySelector("#inputPassword").value = "";
  document.querySelector("#inputConfirmPassword").value = "";
}
