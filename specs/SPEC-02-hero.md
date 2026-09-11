# SPEC-02: Hero Section y Propuesta de Valor Central

- **name:** Sección Hero y Bloque de Conversión Principal
- **descripcion:** Primer punto de contacto visual de la landing page. Presenta la propuesta de valor del nuevo centro Chidaoba (C/ de Perú, 14, Planta G, Alicante), destacando a Salvador Cases, Carlos Cases y Mirco Biscarini, con llamadas a la acción directas, sellos de confianza y una tarjeta fotográfica real en alta resolución de Salvador Cases en competición oficial del IJF World Judo Tour.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Jerarquía Visual y Tipografía:**
   - **Dado** que el usuario accede a la landing page,
   - **Entonces** visualiza en primer plano el titular principal de apertura con tipografía en blanco y degradado plateado (`text-silver-gradient`), destacando las siglas "BJJ" en color rojo carmesí (`text-red-500`) con subrayado dinámico.

2. **Tarjeta de Horarios Rápidos:**
   - **Dado** el lateral derecho del Hero,
   - **Entonces** se exhibe una tarjeta de resumen con los turnos de clases (Mañanas 10:00 - 12:30 y Tardes/Noches 17:30 - 22:30) y un enlace directo para consultar la parrilla completa en `#horarios`.

3. **Acción Principal (CTA WhatsApp):**
   - **Dado** que el usuario hace clic en el botón principal "Solicitar Clase de Prueba",
   - **Entonces** el navegador abre en una pestaña nueva la URL de WhatsApp (`https://wa.me/34600000000`) con el mensaje codificado solicitando información de horarios y clase de prueba sin compromiso.

4. **Acción Secundaria:**
   - **Dado** que el usuario hace clic en "Ver Horarios de Clases",
   - **Entonces** la página se desplaza mediante anclaje suave hasta la sección `#horarios`.

5. **Fotografía Real y Sellos de Confianza:**
   - **Dado** el contenedor visual del lateral derecho,
   - **Entonces** se renderiza la imagen real de competición `/images/salva_competition_1.jpg` con tag animado "FOTO REAL EN COMPETICIÓN", insignia oficial del "WORLD JUDO TOUR" y avatar identificativo de Salvador Cases.
