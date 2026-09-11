# SPEC-03: Tarjeta de Resumen de Horarios en Hero (Sustituye a Countdown)

- **name:** Tarjeta de Resumen Rápido de Horarios en Hero
- **descripcion:** Módulo integrado en la columna derecha del Hero (sustituye al antiguo temporizador de cuenta atrás de obras/preventa). Proporciona a los visitantes un acceso inmediato a los bloques horarios de entrenamiento (Mañanas 10:00 - 12:30 y Tardes/Noches 17:30 - 22:30), dirección del centro y enlace directo a la parrilla completa de `#horarios`.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Visibilidad en el Hero:**
   - **Dado** el lateral derecho de la sección principal del Hero,
   - **Entonces** se muestra una tarjeta con estilo glassmorphism (`glass-card rounded-3xl border border-white/10`) ubicada debajo de la foto de Salvador Cases.

2. **Bloques Horarios Destacados:**
   - **Dado** la tarjeta de horarios rápidos,
   - **Entonces** se muestran dos cajas diferenciadas con fondo `#09090C`:
     - *Turno Mañanas*: `10:00 - 12:30` (BJJ Gi & Judo Tachi-Waza).
     - *Turno Tardes & Noches*: `17:30 - 22:30` (Kids, Adultos & No-Gi Roll).

3. **Enlace a Parrilla Completa:**
   - **Dado** el pie de la tarjeta,
   - **Cuando** el usuario pulsa "Ver parrilla completa →",
   - **Entonces** la página se desplaza suavemente hacia `#horarios`.
