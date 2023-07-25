function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      const element = document.createElement('p')
      const message = document.createTextNode("correo electrónico")
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(() => {
        form.removeChild(element)
      }, 3000)
    } else {
      form.submit();
    }
  });
};


//const email = document.getElementById("email");
const contenido = document.getElementsByTagName("tr")[3];
const email_conf = document.getElementById("email_confirm");
const error_correo = document.createElement("p");
error_correo.innerText = "El correo electrónico no coincide!";
error_correo.style.color="#d14539";
document.getElementsByTagName("tbody")[0].insertBefore(error_correo, contenido);
error_correo.style.display = "none";
email_conf.addEventListener("keyup", ()=>{
  if(form.email.value !== form.email_confirm.value) {
    email_conf.style.backgroundColor = "rgba(230,169,171,.5)";
    error_correo.style.display = "block";
  }
  else {
    email_conf.style.backgroundColor = "rgb(232, 240, 254)";
    error_correo.style.display = "none";
  }
})

window.onload = emailValidation;