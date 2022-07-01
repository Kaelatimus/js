const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementBgityId("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("sirve");

    console.log(userName.value);
    console.log(userEmail.value);
});