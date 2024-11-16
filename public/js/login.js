document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  enter();
});

function enter() {
  let email = document.querySelector("#inputEmail").value;
  let password = document.querySelector("#inputPassword").value;

  if (email == "" || password == "") {
    alert("Campo(s) em branco!");
    return false;
  } else {
    setTimeout(1000);
  }

  console.log(`FORM LOGIN: ${email}`);
  console.log(`FORM PASSWORD: ${password}`);

  fetch("/users/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      serverEmail: email,
      serverPassword: password,
    }),
  }).then(function (answer) {
    if (answer.ok) {
      console.log(answer);

      answer.json().then((json) => {
        console.log(json);
        console.log(JSON.stringify(json));
        sessionStorage.EMAIL_USER = json.email;
        sessionStorage.USERNAME_USER = json.username;
        sessionStorage.PASSWROD_USER = json.id;

        setTimeout(function () {
          window.location = "index.html";
        }, 1000);
      });
    } else {
      console.log("Houve um ERRO ao tentar realizar o login!");

      answer.text().then((text) => {
        console.log(text);
      });
    }
  });

  return false;
}
