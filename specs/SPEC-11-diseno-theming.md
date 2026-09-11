# SPEC-11: Sistema de Diseño Visual y Paleta Cromática

- **name:** Sistema de Theming B&W con Acento BJJ Rojo y Glassmorphism
- **descripcion:** Estilo visual unificado basado en una estética oscura premium (*Dark Obsidian* `#050505`), textos en escala de blancos y grises de alto contraste (*Silver gradient*), y acentos específicos en rojo carmesí (`#DC2626`, `#EF4444`) dedicados a la disciplina de Brazilian Jiu-Jitsu.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Eliminación Total de Tonalidades Antiguas:**
   - **Dado** cualquier archivo de estilos o plantilla del proyecto,
   - **Entonces** no existe ninguna clase, degradado o propiedad cromática en tonos dorados, ámbar o amarillos.

2. **Selección de Texto en Rojo:**
   - **Dado** que un usuario selecciona con el cursor o el dedo cualquier fragmento de texto en la web,
   - **Entonces** el fondo seleccionado se colorea en rojo carmesí con tipografía blanca (`selection:bg-red-600 selection:text-white`).

3. **Efectos de Vidrio Esmerilado (Glassmorphism):**
   - **Dado** los componentes de tarjeta (`.glass-card`, `.glass-card-dark`, `.glass-card-red`),
   - **Entonces** aplican desenfoque de fondo (`backdrop-blur-md` / `backdrop-blur-xl`), bordes sutiles semitransparentes (`border-white/10` a `border-white/15`) y en el caso de BJJ, brillo y borde rojizo (`red-border-glow`).

4. **Animaciones y Microinteracciones:**
   - **Dado** el scroll y la interacción del usuario,
   - **Entonces** se ejecutan con fluidez a 60 FPS las animaciones `animate-pulse-glow`, `animate-badge-bounce`, `animate-pulse-subtle` y las transiciones hover de escala y elevación (`hover:-translate-y-0.5`).
