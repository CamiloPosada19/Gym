# SPEC-01: Barra de Anuncios y Navegación Principal Sticky

- **name:** Navegación Principal y Barra Superior de Información (Navbar)
- **descripcion:** Cabecera fija superior compuesta por una barra informativa de ubicación y una barra de navegación transparente con efecto cristal (*backdrop blur*). Proporciona enlaces ancla con scroll suave a las secciones del sitio (*El Club, Entrenadores, Disciplinas, Instalaciones, Horarios, Contacto*), acceso directo a WhatsApp y menú colapsable para dispositivos móviles.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Visibilidad Sticky:**
   - **Dado** que un usuario navega por la página web en cualquier dispositivo,
   - **Cuando** realiza scroll hacia abajo más allá del viewport inicial,
   - **Entonces** el elemento `<header>` permanece visible fijado en la parte superior (`sticky top-0 z-40`) con fondo translúcido y borde sutil inferior (`border-white/10`).

2. **Navegación Desktop:**
   - **Dado** que un usuario está en pantalla de escritorio (`lg` o superior),
   - **Cuando** hace clic en cualquiera de los enlaces de navegación (*El Club, Entrenadores, Disciplinas, Instalaciones, Horarios, Contacto*),
   - **Entonces** la página se desplaza suavemente (*smooth scroll*) hacia el ancla con el identificador (`#proyecto`, `#entrenadores`, `#disciplinas`, `#instalaciones`, `#horarios`, `#contacto`) correspondiente.

3. **Hover Visual:**
   - **Dado** que un usuario pasa el cursor sobre cualquiera de los enlaces de la navegación en escritorio,
   - **Entonces** se despliega una línea inferior indicadora de color rojo (`bg-red-600`) mediante una transición fluida (`transition-all duration-300`).

4. **Menú Móvil Interactivo:**
   - **Dado** que un usuario accede desde un dispositivo móvil o pantalla con ancho menor a 1024px,
   - **Cuando** pulsa el botón hamburguesa (`#mobile-menu-btn`),
   - **Entonces** el contenedor `#mobile-menu` alterna su visibilidad quitando o añadiendo la clase `hidden`.
   - **Y cuando** pulsa cualquier enlace del menú móvil desplegado, el menú se oculta automáticamente (`classList.add('hidden')`).

5. **CTA WhatsApp Circular en Navbar:**
   - **Dado** que un usuario pulsa el botón circular de WhatsApp en la cabecera (en escritorio o móvil),
   - **Entonces** se abre en una nueva pestaña el enlace oficial `https://wa.me/34634251393` con el texto predeterminado de solicitud de información para la apertura.
