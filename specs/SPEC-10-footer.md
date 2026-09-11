# SPEC-10: Pie de Página y Enlaces Institucionales

- **name:** Footer Corporativo con Datos de Contacto y Redes Oficiales
- **descripcion:** Bloque de cierre del portal que contiene la identidad del club, lemas marciales tradicionales (*Jita Kyoei*, *Seiryoku Zen'yo*), directorio de navegación, enlaces directos a WhatsApp, perfiles de Instagram (@salvacases y @mibisjj) y avisos legales.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Directorio de Navegación Rápida:**
   - **Dado** el footer en la parte inferior del portal,
   - **Entonces** se muestran enlaces ancla funcionales a todas las secciones principales (`#proyecto`, `#entrenadores`, `#disciplinas`, `#instalaciones`, `#horarios`, `#contacto`).

2. **Enlaces Verificables a Redes Sociales:**
   - **Dado** el bloque de contacto del footer:
     - El enlace a `@salvacases` dirige a `https://instagram.com/salvacases` con `target="_blank"`.
     - El enlace a `@mibisjj` (BJJ) dirige a `https://www.instagram.com/mibisjj/` con `target="_blank"`.

3. **Ubicación y Teléfono Oficial:**
   - **Dado** el apartado de localización,
   - **Entonces** se muestra la dirección completa "C/ de Perú, 14 (Planta G), 03008 Alicante" y el enlace de contacto a WhatsApp al número `+34 634 25 13 93`.

4. **Copyright y Filosofía:**
   - **Dado** el pie inferior del footer,
   - **Entonces** se exhibe el copyright 2026 correspondiente a Salvador Cases, Carlos Cases y Mirco Biscarini, junto a las máximas de Jigoro Kano: *"Jita Kyoei"* y *"Seiryoku Zen'yo"*.
