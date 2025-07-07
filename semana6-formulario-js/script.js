const formulario = document.getElementById("formulario");
const btnEnviar = document.getElementById("btnEnviar");

const campos = {
  nombre: false,
  email: false,
  password: false,
  confirm: false,
  edad: false
};

document.getElementById("nombre").addEventListener("input", function () {
  const error = document.getElementById("error-nombre");
  if (this.value.length < 3) {
    error.textContent = "El nombre debe tener al menos 3 caracteres.";
    campos.nombre = false;
  } else {
    error.textContent = "";
    campos.nombre = true;
  }
  validarFormulario();
});

document.getElementById("email").addEventListener("input", function () {
  const error = document.getElementById("error-email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(this.value)) {
    error.textContent = "Correo no válido.";
    campos.email = false;
  } else {
    error.textContent = "";
    campos.email = true;
  }
  validarFormulario();
});

document.getElementById("password").addEventListener("input", function () {
  const error = document.getElementById("error-password");
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  if (!regex.test(this.value)) {
    error.textContent = "Mínimo 8 caracteres, un número y un carácter especial.";
    campos.password = false;
  } else {
    error.textContent = "";
    campos.password = true;
  }
  validarConfirmacion();
  validarFormulario();
});

document.getElementById("confirm-password").addEventListener("input", function () {
  validarConfirmacion();
  validarFormulario();
});

function validarConfirmacion() {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;
  const error = document.getElementById("error-confirm");
  if (pass !== confirm || confirm === "") {
    error.textContent = "Las contraseñas no coinciden.";
    campos.confirm = false;
  } else {
    error.textContent = "";
    campos.confirm = true;
  }
}

document.getElementById("edad").addEventListener("input", function () {
  const error = document.getElementById("error-edad");
  const edad = parseInt(this.value);
  if (edad < 18) {
    error.textContent = "Debes tener al menos 18 años.";
    campos.edad = false;
  } else {
    error.textContent = "";
    campos.edad = true;
  }
  validarFormulario();
});

function validarFormulario() {
  const todoValido = Object.values(campos).every(val => val);
  btnEnviar.disabled = !todoValido;
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 ¡Formulario enviado correctamente!");
});
