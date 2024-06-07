function validarLogin() {
    // Limpiar mensajes de error
    document.getElementById("errorPass").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    
    // Obtener valores de los campos
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    
    let hayErrores = false;

    // Validar password
    if (password.trim() === "") {
        document.getElementById("errorPass").textContent = "El nombre es obligatorio.";
        document.getElementById("password").classList.add("input-error");
        hayErrores = true;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        document.getElementById("errorEmail").textContent = "El correo electrónico es obligatorio.";
        document.getElementById("email").classList.add("input-error");
        hayErrores = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent = "El correo electrónico no es válido.";
        document.getElementById("email").classList.add("input-error");
        hayErrores = true;
    }

    // Si hay errores, evitar el envío del formulario
    if (hayErrores) {
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true; // Permitir el envío del formulario
}

function validarRegistro() {
    // Limpiar mensajes de error
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorPass").textContent = "";
    document.getElementById("errorRepass").textContent = "";
    
    // Obtener valores de los campos
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const repassword = document.getElementById("repassword").value;
    
    let hayErrores = false;

    // Validar password
    if (password.trim() === "") {
        document.getElementById("errorPass").textContent = "El ingreso de contraseña es obligatorio.";
        document.getElementById("password").classList.add("input-error");
        hayErrores = true;
    }
    if (repassword.trim() === "") {
        document.getElementById("errorRepass").textContent = "El reingreso de contraseña es obligatorio.";
        document.getElementById("password").classList.add("input-error");
        hayErrores = true;
    }

    if (password !== repassword) {
        document.getElementById("errorRepass").textContent = "Las contraseñas no coinciden.";
        document.getElementById("password").classList.add("input-error");
        document.getElementById("repassword").classList.add("input-error");
        hayErrores = true;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        document.getElementById("errorEmail").textContent = "El correo electrónico es obligatorio.";
        document.getElementById("email").classList.add("input-error");
        hayErrores = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent = "El correo electrónico no es válido.";
        document.getElementById("email").classList.add("input-error");
        hayErrores = true;
    }

    // Validar nombre
    if (nombre.trim() === "") {
        document.getElementById("errorNombre").textContent = "El ingreso de nombre es obligatorio.";
        document.getElementById("nombre").classList.add("input-error");
        hayErrores = true;
    }

    // Si hay errores, evitar el envío del formulario
    if (hayErrores) {
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true; // Permitir el envío del formulario
}
