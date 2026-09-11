# SPEC-08: Parrilla de Horarios Semanales y FAQ Acordeón

- **name:** Parrilla Oficial de Horarios (Team Kong / Kurama) y Preguntas Frecuentes
- **descripcion:** Matriz de horarios semanal oficial de Lunes a Sábado con 5 franjas (09:30, 10:00, 15:00, 18:30 y 19:30), diferenciación cromática de BJJ Gi, No-Gi, BJJ Femenino y Tatami Abierto, selector adaptativo móvil por pestañas de día, filtros interactivos por modalidad y enlace individual para reserva directa de plaza en WhatsApp.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Matriz Fiel al Póster Oficial de Entrenamiento:**
   - **Dado** el horario semanal de Chidaoba (Team Kong / Team Kurama),
   - **Entonces** se distribuyen con precisión las sesiones en los 6 días:
     - `09:30`: *Tatami Abierto* (Lunes a Sábado).
     - `10:00`: *BJJ Gi* (Lunes y Viernes) y *No-Gi* (Miércoles).
     - `15:00`: *BJJ Gi* (Martes y Jueves).
     - `18:30`: *BJJ Femenino* (Martes en tarjeta roja) y *BJJ Gi* (Viernes).
     - `19:30`: *No-Gi* (Lunes y Jueves) y *BJJ Gi* (Martes y Miércoles).

2. **Diferenciación Cromática por Disciplina:**
   - **Dado** el catálogo visual de clases en la tabla:
     - *BJJ Gi*: Tarjeta blanca nítida con tipografía en negro profundo y máxima legibilidad.
     - *No-Gi*: Tarjeta oscura en grafito y bordes plateados con icono de lucha.
     - *BJJ Femenino*: Tarjeta en degradado carmesí (`bg-red-600 to red-800`), borde brillante y anillo de resplandor.
     - *Tatami Abierto*: Tarjeta en vidrio translúcido con icono de mano abierta.

3. **Optimización Responsive Móvil con Pestañas y Alternador:**
   - **Dado** un dispositivo con pantalla pequeña (`< sm`),
   - **Entonces** se activa por defecto la vista móvil con selector táctil de días (*LUN, MAR, MIÉ, JUE, VIE, SÁB*), permitiendo ver el detalle de cada día en tarjetas verticales y botón directo "Reservar", con botón alternador para visualizar la tabla completa si se desea.

4. **Filtro Rápido Interactivo:**
   - **Dado** los botones superiores (*Todas las Clases, BJJ Gi, No-Gi, BJJ Femenino, Tatami Abierto*),
   - **Cuando** el usuario pulsa un filtro,
   - **Entonces** las tarjetas que coinciden mantienen opacidad total mientras las restantes atenúan su visibilidad para facilitar el escaneo visual.

5. **Banner de Conversión y Acordeón FAQ:**
   - **Dado** el pie de la sección,
   - **Entonces** se muestra el banner de "KONG JIU-JITSU ACADEMY · TEAM KURAMA AFFILIATE" destacando que la primera clase es 100% gratuita, seguido del acordeón de preguntas frecuentes sobre horarios, vestimenta recomendada y ubicación.
