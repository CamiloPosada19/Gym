# SPEC-04: Fichas Técnicas del Staff y Galería de Competición

- **name:** Perfiles del Cuadro Técnico y Galería Fotográfica Real
- **descripcion:** Módulo que expone la trayectoria y el palmarés de los tres entrenadores principales (Salvador Cases, Carlos Cases y Mirco Biscarini) y muestra una galería de cuatro fotografías reales de competiciones, podios, dojo y acción en tatami.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Ficha de Salvador Cases Roca:**
   - **Dado** el grid de entrenadores,
   - **Entonces** la tarjeta de Salvador Cases exhibe su foto de perfil real IJF, el rol de "HEAD COACH · JUDO OLÍMPICO", los títulos de "París 2024" y "Subcampeón de Europa", junto con su palmarés detallado en competiciones internacionales.

2. **Ficha de Carlos Cases Roca:**
   - **Dado** el grid de entrenadores,
   - **Entonces** la tarjeta de Carlos Cases exhibe su foto real, el rol de "DIRECTOR TÉCNICO · MAESTRO NACIONAL" y su acreditación como Campeón de España en todas las categorías (Sub-15, Sub-17, Sub-21 y Absoluta) y especialista en preparación física y biomecánica marcial.

3. **Ficha Diferenciada de Mirco Biscarini (BJJ):**
   - **Dado** el grid de entrenadores,
   - **Entonces** la tarjeta de Mirco Biscarini se presenta en contenedor de vidrio rojo (`glass-card-red`, borde `border-red-500/40`, sombra perimetral `red-border-glow`), insignia "FAIXA PRETA", palmarés (Campeón de Europa BJJ 2022, Spain BJJ Tour 2026) y botón con enlace directo a su perfil de Instagram (`https://www.instagram.com/mibisjj/`).

4. **Galería Fotográfica Real:**
   - **Dado** el bloque inferior de momentos reales,
   - **Entonces** se muestran 4 imágenes de alta resolución:
     - `/images/salva_podium_absoluto.jpg` (Podio de Campeón de España).
     - `/images/salva_competition_2.jpg` (Combate final en Grand Prix).
     - `/images/mirco_bjj_action.jpg` (Técnica de BJJ en tatami).
     - `/images/chidaoba_dojo_real.jpg` (Tatami y centro en Alicante).
   - Todas las imágenes cuentan con textos alternativos (`alt`), descripciones superpuestas y microanimación de aumento de escala en hover (`group-hover:scale-105`).
