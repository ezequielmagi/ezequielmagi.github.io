const dataLogin = document.getElementById("loginForm");

let userRegistered = JSON.parse(localStorage.getItem("userDB"));

const hallaMail = (userEmail, userPass) => {
  const usuario = userRegistered.find(
    (usuario) => usuario.userEmail === userEmail
  );
  if (usuario === undefined) {
    alert("Seguro escribiste bien el mail? Vuelve a intentarlo");
  } else {
    //ahora hay que corroborar el pass
    console.log(
      `el usuario existe y es ${usuario.userEmail} y su pass es ${usuario.userPassword}`
    );
    if (usuario.userPassword === userPass) {
      console.log("excelente! bienvenido usuario");
      alert("BIENVENIDO");
    } else {
      console.log("el pass es incorrecto");
    }

    // comparaPass(usuario);
  }
  return usuario;
};

dataLogin.addEventListener("submit", (e) => {
  event.preventDefault();

  const userEmail = loginEmail.value;
  const userPass = loginPassword.value;

  // console.log(userEmail, userPass);

  let hallado = hallaMail(userEmail, userPass);
  console.log(hallado);
  console.log(hallado.userPassword);
});
