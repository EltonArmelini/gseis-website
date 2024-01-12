const formBtn = document.querySelector("#form-submit");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Obtener datos: Obtenemos los datos para proceder con la validacion
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const serviceType = document.querySelector("#serviceType");
  const specificationService = document.querySelector("#specificationService");
  const toastEl = document.querySelector(".toast");
  const toastBody = document.querySelector(".toast-body");
  const toast = new bootstrap.Toast(toastEl);
  let errorMessage = "";
  const businessNumber = "5493757311336";

  // Validación: Verificar que los campos no estén vacíos y los select estén seleccionados
  if (nameInput.value.trim() === "") {
    errorMessage = "Por favor, ingresa tu nombre.";
    toastBody.textContent = errorMessage;
    toast.show();
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    errorMessage = "Por favor, ingresa un correo electrónico válido.";
    toastBody.textContent = errorMessage;
    toast.show();
    return;
  }

  if (serviceType.value === "Selecciona un Servicio") {
    errorMessage = "Por favor, selecciona un servicio.";
    toastBody.textContent = errorMessage;
    toast.show();
    return;
  }

  if (specificationService.value === "Elige una opción") {
    errorMessage = "Por favor, elige una acción.";
    toastBody.textContent = errorMessage;
    toast.show();
    return;
  }
  const message = {
    clientName: nameInput.value.trim(),
    clientMail: emailInput.value.trim(),
    serviceType: serviceType.value,
    interests: specificationService.value,
  };
  sendMessage(businessNumber,message);
});

const sendMessage = (number, message) => {
  const encodedMessage = `Cliente%3A${message.clientName}%0AMail%3A${message.clientMail}%20%0AServicio%3A${message.serviceType}%20%0AInteres%3A${message.interests}%20`;
  window.location.href = `https://api.whatsapp.com/send/?phone=${number}&text=${encodedMessage}`;
};
