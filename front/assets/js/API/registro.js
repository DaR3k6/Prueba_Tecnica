const apiRegistro = "http://localhost:3300";

//Dom
const btnRegistro = document.querySelector("#btnRegistro");

btnRegistro.addEventListener("click", e => {
  e.preventDefault();

  const registro = {
    NOMBRE: nombre.value,
    APELLIDO: apellido.value,
    DIRECCION: direccion.value,
    TELEFONO: telefono.value,
    EMAIL: gmail.value,
    CONTRASEÑA: password.value,
  };
  fetch(apiRegistro + "/usuario/crear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registro),
  })
    .then(response => response.text())
    .then(data => {
      if (data === "true") {
        Swal.fire({
          icon: "success",
          title: "USUARIO REGISTRADO",
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location = "login.html";
        }, 1500);
      }
    });
});
