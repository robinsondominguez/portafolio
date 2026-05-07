# Portfolio — Robinson Dominguez Ulloa

> Sitio web personal desarrollado como presentación profesional de proyectos,
> habilidades y formas de contacto. Construido con HTML, CSS y JavaScript puro,
> sin frameworks ni dependencias externas.

---

## Descripción

Este portfolio tiene como objetivo mostrar de forma clara y ordenada el trabajo
realizado durante mi formación como desarrollador de software. Cada proyecto
incluye descripción, tecnologías usadas y enlace directo al repositorio en GitHub.

El sitio está diseñado para ser fácil de mantener y extender: cualquier desarrollador
puede entender el código, agregar proyectos nuevos o cambiar el diseño siguiendo
la estructura existente.

---

## Estructura del proyecto

```
portfolio/
├── index.html          <- Estructura y contenido de la página
├── css/
│   └── style.css       <- Estilos, temas de color y diseño responsivo
├── js/
│   └── scripts.js      <- Lógica: cambio de tema, modo claro/oscuro, animaciones
└── img/
    ├── Yo.jpeg         <- Foto de perfil
    ├── MySQL.png       <- Imagen del proyecto Pizzeria Don Piccolo
    ├── MongoDB.png     <- Imagen del proyecto CampusMusic
    ├── JavaScript.png  <- Imagen del proyecto LMS
    ├── Html.png        <- Imagen del proyecto Kario Media
    ├── Git.png         <- Imagen del proyecto Diario de un Viaje
    └── Java.png        <- Imagen del proyecto TecnoStore
```

Cada archivo tiene una responsabilidad única:

- `index.html` solo contiene contenido y estructura semántica, sin estilos en línea.
- `style.css` centraliza todo el diseño, incluyendo los cuatro temas de color y el modo claro/oscuro.
- `scripts.js` maneja la interactividad con funciones independientes y comentadas.

---

## Funcionalidades

### Selector de temas de color

La página incluye cuatro temas de acento seleccionables desde la barra de navegación:

| Tema       | Color     |
|------------|-----------|
| Azul (default) | `#2563eb` |
| Verde      | `#10b981` |
| Purpura    | `#7c3aed` |
| Naranja    | `#f59e0b` |

El tema seleccionado se guarda en `localStorage` y persiste al recargar la página.

### Modo claro / modo oscuro

Botón en la barra de navegación que alterna entre ambos modos. La preferencia
también se guarda en `localStorage`.

### Animaciones de scroll

Los elementos de proyectos y habilidades aparecen con una animación de entrada
al hacer scroll, usando `IntersectionObserver` para mayor eficiencia.

---

## Proyectos incluidos

| Proyecto | Tecnología principal | Repositorio |
|----------|----------------------|-------------|
| Pizzeria Don Piccolo | MySQL | [ver](https://github.com/robinsondominguez/MySQL_S2_Projecto_DominguezUlloaRobinson) |
| CampusMusic | MongoDB | [ver](https://github.com/David-Cardozo/PROYECTO_MONGODB2_S2_CARRILLODAVID_DOMINGUEZROBINSON) |
| Learning Management System | JavaScript | [ver](https://github.com/SharickGPinto/PROYECTO-LMS_PINTOSHARICK_DOMINGUEZROBINSON) |
| Kario Media | HTML / CSS | [ver](https://github.com/gamaz-19/PROYECTO_HTML_GOMEZMARIA_VARGASJHORGUEN_DOMINGUEZROBINSON) |
| Diario de un Viaje | Git | [ver](https://github.com/robinsondominguez/Ejercicio-examen-) |
| TecnoStore | Java | [ver](https://github.com/robinsondominguez/JavaProject_S1_DominguezRobinson) |

---

## Tecnologias usadas en el portfolio

- **HTML5** — Estructura semántica con secciones, `nav`, `header`, `article`, `footer`.
- **CSS3** — Variables CSS para temas, animaciones, `backdrop-filter`, diseño responsivo con Grid y Flexbox.
- **JavaScript (ES6)** — Sin frameworks. Tres funciones principales: `cambiarTema()`, `toggleModo()`, `initAnimaciones()`.
- **Google Fonts** — Fraunces (titulos) + Space Mono (cuerpo de texto).

No se usaron librerias externas ni gestores de paquetes. El sitio abre directo desde
el archivo `index.html` en cualquier navegador.

---

## Como usar

1. Descarga o clona el repositorio.
2. Abre `index.html` en tu navegador.

No requiere instalacion, servidor local ni configuracion adicional.

```bash
git clone https://github.com/robinsondominguez/portafolio.git
cd portafolio
```

---

## Contacto

| Canal    | Detalle |
|----------|---------|
| Email    | robinsondominguezulloa349@gmail.com |
| GitHub   | [robinsondominguez](https://github.com/robinsondominguez) |
| LinkedIn | [robinson-dominguez-ulloa](https://www.linkedin.com/in/robinson-dominguez-ulloa-b15536370/) |

---

<p align="center">Hecho con HTML, CSS y JS · © 2026 Robinson Dominguez Ulloa</p>
