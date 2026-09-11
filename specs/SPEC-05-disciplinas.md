# SPEC-05: Módulo de Disciplinas y Filosofía de Entrenamiento

- **name:** Catálogo de Disciplinas (Judo Olímpico, BJJ y Chidaoba Kids & Juniors)
- **descripcion:** Presentación estructurada de las 3 modalidades impartidas en el centro, con desglose curricular ("¿Qué aprenderás?"), público objetivo recomendado y CTA individual para consultar horarios específicos vía WhatsApp en una cuadrícula simétrica de 3 columnas.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Diferenciación Cromática de Brazilian Jiu-Jitsu:**
   - **Dado** el catálogo de disciplinas,
   - **Entonces** la tarjeta de "Brazilian Jiu-Jitsu (BJJ Gi & No-Gi)" se destaca visualmente con el contenedor `glass-card-red`, reborde rojo brillante (`red-border-glow`) y botón rojo con sombra de acento (`bg-red-600 shadow-red-600/30`).
   - **Mientras que** Judo Olímpico y Chidaoba Kids & Juniors mantienen una estética sobria en blanco, grafito y zinc.

2. **Banner Filosófico de Transición:**
   - **Dado** el bloque intermedio de la sección,
   - **Entonces** se visualiza la imagen `/images/bjj_ground_grappling.jpg` junto con el lema de entrenamiento: *"De pie te derribo con Judo. En el suelo te someto con BJJ."*.

3. **Desglose Curricular por Disciplina:**
   - **Dado** cualquiera de las 3 tarjetas,
   - **Entonces** se detallan claramente los 4 conceptos pedagógicos clave que el alumno aprenderá (ej. Ukemi, Kumi-Kata, pases de guardia, No-Gi Grappling, valores anti-bullying).

4. **Botón Contextual a WhatsApp:**
   - **Dado** que el usuario pulsa en el botón inferior de una tarjeta ("Preguntar por horarios de..."),
   - **Entonces** se abre WhatsApp con un mensaje preconfigurado preguntando por los horarios y niveles específicos de esa disciplina.

