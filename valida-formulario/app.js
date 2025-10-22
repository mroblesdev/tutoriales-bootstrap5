const form = document.getElementById("form-registro");

// Campos individuales
const dni = document.getElementById("dni");
const nombre = document.getElementById("nombre");
const comprobante = document.getElementById("comprobante");
const terminos = document.getElementById("terminos");

// Función para mostrar error
function mostrarError(input, mensaje) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    let feedback = input.parentNode.querySelector(".invalid-feedback");
    if (!feedback) {
        feedback = document.createElement("div");
        feedback.classList.add("invalid-feedback");
        input.parentNode.appendChild(feedback);
    }
    feedback.textContent = mensaje;
}

// Función para mostrar validación correcta
function mostrarValido(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    let feedback = input.parentNode.querySelector(".invalid-feedback");
    if (feedback) {
        feedback.textContent = "";
    }
}

// Validaciones individuales
dni.addEventListener("input", () => {
    const valor = dni.value.trim();
    if (!/^\d{8}$/.test(valor)) {
        mostrarError(dni, "El DNI debe tener 8 dígitos numéricos.");
    } else {
        mostrarValido(dni);
    }
});

nombre.addEventListener("input", () => {
    if (nombre.value.trim().length < 3) {
        mostrarError(nombre, "Debe ingresar un nombre válido.");
    } else {
        mostrarValido(nombre);
    }
});

comprobante.addEventListener("change", () => {
    if (comprobante.files.length === 0) {
        mostrarError(comprobante, "Debe subir un comprobante de pago.");
    } else {
        mostrarValido(comprobante);
    }
});

terminos.addEventListener("click", () => {
    if (!terminos.checked) {
        mostrarError(terminos, "Debe aceptar los terminos.");
    } else {
        mostrarValido(terminos);
    }
});

// Envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!/^\d{8}$/.test(dni.value.trim())) {
        mostrarError(dni, "El DNI debe tener exactamente 8 dígitos numéricos.");
    } else {
        mostrarValido(dni);
    }

    if (nombre.value.trim().length < 3) {
        mostrarError(nombre, "El nombre es obligatorio.");
    } else {
        mostrarValido(nombre);
    }

    if (comprobante.files.length === 0) {
        mostrarError(comprobante, "Debe subir un comprobante de pago.");
    } else {
        mostrarValido(comprobante);
    }

    if (!terminos.checked) {
        mostrarError(terminos, "Debe aceptar los terminos.");
    } else {
        mostrarValido(terminos);
    }

    // Validación final antes de enviar
    if (!dni.classList.contains("is-valid") ||
        !nombre.classList.contains("is-valid") ||
        !comprobante.files.length ||
        !terminos.checked) {
        alert("Por favor, completa correctamente todos los campos antes de registrar.");
        return;
    }
});
