const botonModo = document.getElementById("modoOscuro");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botonModo.textContent = "☀️ Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }
});