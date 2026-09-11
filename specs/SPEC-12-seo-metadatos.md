# SPEC-12: SEO, Metadatos OpenGraph y Accesibilidad

- **name:** Arquitectura SEO, Metadatos Sociales y Accesibilidad Web
- **descripcion:** Configuración integral de la cabecera HTML en `Layout.astro` para posicionamiento orgánico en motores de búsqueda para términos clave locales ("Judo Alicante", "BJJ Alicante", "Salvador Cases") y generación de tarjetas sociales (*rich snippets*) en WhatsApp y redes sociales.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Etiquetas Meta Primarias:**
   - **Dado** el código fuente generado en el `<head>`,
   - **Entonces** existen las etiquetas `<title>`, `<meta name="description">` y `<meta name="keywords">` con mención expresa a Chidaoba, Salvador Cases, Carlos Cases, Mirco Biscarini, Judo Alicante y BJJ Alicante.

2. **Open Graph y Twitter Card para Compartir:**
   - **Dado** que un usuario comparte el enlace de la web por WhatsApp, Telegram, X o Facebook,
   - **Entonces** las plataformas leen `og:title`, `og:description` y `og:image` (`/images/salva_competition_1.jpg`), generando una tarjeta de vista previa con imagen atractiva y título con gancho de preventa.

3. **Optimización Tipográfica:**
   - **Dado** la carga de fuentes web,
   - **Entonces** existen las directivas `<link rel="preconnect">` hacia Google Fonts y `display=swap` para prevenir demoras de bloqueo de renderizado tipográfico (*FOIT*).

4. **Accesibilidad y Semántica HTML5:**
   - **Dado** el árbol del DOM,
   - **Entonces** la estructura utiliza etiquetas semánticas estándar (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<details>`) y todas las imágenes poseen un atributo `alt` coherente y descriptivo.
