//declaramos las clases
class Users {
  constructor(userName, userEmail, userPassword) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
}

//tomamos del html los datos ingresados al form
const ingresedData = document.getElementById("registerForm");

ingresedData.addEventListener("submit", (e) => {
  event.preventDefault();
  register();
});

const register = () => {
  let userRegistered = JSON.parse(localStorage.getItem("userDB"));
  if (!userRegistered) {
    userRegistered = [];
  }

  //asiganmos los valores ingresados para procesar
  const name = userName.value;
  const mail = userEmail.value;
  const password = userPassword.value;

  let userRegistering = new Users(name, mail, password);

  userRegistered.push(userRegistering);

  localStorage.setItem("userDB", JSON.stringify(userRegistered));

  alert(
    `Gracias ${name} por registrarte!\nPronto recibiras un correo de confirmacion`
  );

  //limpiamos el form
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
};
