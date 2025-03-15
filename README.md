# Portafolio Personal Dinámico de Cristhian Vasco

Este repositorio contiene el código fuente para el portafolio personal de Cristhian Vasco, un ingeniero en sistemas. Este se desplego en github page lo podra visualizar en https://cristhianvasco.github.io/Ejercicio-prueba-final/

## Cómo Usar

1.  Clona el repositorio:

    ```bash
    git clone (https://github.com/cran/DELTD)](https://cristhianvasco.github.io/Ejercicio-prueba-final/)
    ```

2.  Abre el archivo `index.html` en tu navegador web.

## Explicación del Código

* **HTML**:
    * La estructura HTML está organizada en secciones semánticas (`<header>`, `<section>`, `<ul>`, `<li>`, etc.) para una mejor accesibilidad y SEO.
    * Se incluyen elementos para la información personal, experiencia laboral, educación, habilidades y proyectos.
    * Se agrega un botón para alternar el modo oscuro y enlaces a redes sociales.
    * Se implementan contenedores `div` para las barras de habilidades.
* **CSS**:
    * Se definen estilos para el diseño general, incluyendo colores, tipografía y márgenes.
    * Se crean estilos específicos para el modo oscuro, cambiando los colores de fondo y texto.
    * Se implementan animaciones para las barras de habilidad y efectos hover en los enlaces sociales.
    * Se define el estilo de las barras de habilidades.
* **JavaScript**:
    * Se utiliza `DOMContentLoaded` para asegurar que el código JavaScript se ejecute después de que el DOM esté completamente cargado.
    * La función `animateSkillBars()` anima las barras de habilidad al cargar la página.
    * La función `setupDarkModeToggle()` maneja el modo oscuro, alternando clases CSS y guardando la preferencia en `localStorage`.
    * La función `setupSocialHoverEffects()` aplica efectos hover a los enlaces sociales.

## Contribución

Si deseas contribuir a este proyecto, sigue los pasos:

1.  Haz un fork del repositorio.
2.  Crea una rama para tus cambios: `git checkout -b mi-rama`.
3.  Realiza tus cambios y haz commit: `git commit -m "Descripción de los cambios"`.
4.  Sube tus cambios a tu repositorio: `git push origin mi-rama`.
5.  Crea un pull request.
