/**
 * scripts.js — Lógica del portfolio
 * ===================================
 * Este archivo tiene tres responsabilidades claras:
 *
 *   1. cambiarTema(nombre)  → cambia el color de acento de la página
 *   2. toggleModo()         → alterna entre modo oscuro y modo claro
 *   3. initAnimaciones()    → activa fade-in al hacer scroll
 *
 * Cada función es independiente y está comentada.
 * Al final del archivo, el código de inicialización las conecta.
 */


/* ============================================================
   1. SISTEMA DE TEMAS DE COLOR
   ============================================================
   La función cambiarTema() hace tres cosas:
   a) Cambia el atributo data-theme en <html> (el CSS reacciona).
   b) Marca el botón correcto como "activo".
   c) Guarda la elección en localStorage para que persista.
   ============================================================ */

/**
 * Cambia el tema de color de toda la página.
 * @param {string} nombreTema - "default" | "verde" | "purpura" | "naranja"
 */
function cambiarTema(nombreTema) {
  // a) Actualiza el atributo en <html>
  //    El CSS usa [data-theme="X"] { --acento: ... } para cambiar los colores.
  document.documentElement.setAttribute('data-theme', nombreTema);

  // b) Actualiza el estado visual de los botones
  document.querySelectorAll('.tema-btn').forEach(function (boton) {
    boton.classList.remove('activo');
    if (boton.dataset.tema === nombreTema) {
      boton.classList.add('activo');
    }
  });

  // c) Persiste la preferencia del usuario
  localStorage.setItem('portfolio-tema', nombreTema);
}


/* ============================================================
   2. MODO OSCURO / MODO CLARO
   ============================================================
   La función toggleModo() alterna la clase .claro en <body>.
   En style.css, body.claro redefine las variables de color de fondo.
   ============================================================ */

/**
 * Alterna entre modo oscuro (default) y modo claro.
 */
function toggleModo() {
  var cuerpo   = document.body;
  var icono    = document.getElementById('iconoModo');
  var estaClaro = cuerpo.classList.toggle('claro');

  // Cambia el emoji del botón según el modo activo
  icono.textContent = estaClaro ? '☀️' : '🌙';

  // Guarda la preferencia
  localStorage.setItem('portfolio-modo', estaClaro ? 'claro' : 'oscuro');
}


/* ============================================================
   3. ANIMACIONES AL HACER SCROLL
   ============================================================
   IntersectionObserver es una API del navegador que detecta
   cuándo un elemento entra o sale del área visible (viewport).

   Es más eficiente que escuchar el evento "scroll" directamente,
   porque no se ejecuta en cada pixel, sino solo cuando hay cambio.
   ============================================================ */

/**
 * Activa la animación de entrada para elementos con clase .revelar
 * cuando el usuario los hace visibles con el scroll.
 */
function initAnimaciones() {
  // Configuramos el observer:
  // threshold: 0.12 = el elemento se activa cuando el 12% es visible
  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        // Agrega la clase .visible → el CSS activa el fade-in
        entrada.target.classList.add('visible');
        // Dejamos de observar el elemento (ya no necesita más cambios)
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  // Observamos todos los elementos que deben animarse
  document.querySelectorAll('.revelar').forEach(function (elemento) {
    observer.observe(elemento);
  });
}


/* ============================================================
   INICIALIZACIÓN
   ============================================================
   Cuando el DOM está completamente cargado:
   - Restauramos el tema y modo guardados
   - Conectamos los botones con sus funciones
   - Activamos las animaciones
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Restaurar tema guardado ──────────────────────────────
  var temaGuardado = localStorage.getItem('portfolio-tema') || 'default';
  cambiarTema(temaGuardado);

  // ── Restaurar modo guardado ──────────────────────────────
  var modoGuardado = localStorage.getItem('portfolio-modo');
  if (modoGuardado === 'claro') {
    document.body.classList.add('claro');
    document.getElementById('iconoModo').textContent = '☀️';
  }

  // ── Conectar botones de tema ─────────────────────────────
  // Cada botón .tema-btn tiene un atributo data-tema="nombre".
  // Al hacer click, llamamos cambiarTema() con ese valor.
  document.querySelectorAll('.tema-btn').forEach(function (boton) {
    boton.addEventListener('click', function () {
      cambiarTema(boton.dataset.tema);
    });
  });

  // ── Conectar botón de modo ───────────────────────────────
  document.getElementById('btnModo').addEventListener('click', toggleModo);

  // ── Iniciar animaciones de scroll ────────────────────────
  initAnimaciones();

});
