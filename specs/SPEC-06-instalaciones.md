# SPEC-06: Módulo de Instalaciones y Tatami de Competición

- **name:** Exhibición del Dojo e Infraestructura Deportiva
- **descripcion:** Sección descriptiva de las instalaciones del nuevo club ubicado en C/ de Perú, 14 (Planta G), 03008 Alicante. Destaca el tatami oficial de 250 m² con amortiguación anti-impactos, zona de preparación física y calistenia, vestuarios y sistema de ventilación.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Fotografía Principal del Dojo:**
   - **Dado** el módulo de instalaciones,
   - **Entonces** se muestra la imagen `/images/gym_dojo_interior.jpg` en formato gran angular con badge superior "FASE FINAL DE OBRAS (88%)" y pie con la indicación "Tatami Oficial de Competición · Zona de Fuerza & Calistenia".

2. **Grid de Especificaciones Técnicas:**
   - **Dado** el bloque de características de la instalación,
   - **Entonces** se muestran 4 tarjetas diferenciadas con icono y descripción:
     1. *250m² Tatami Oficial Amortiguado*: superficie de alta densidad con cámara de absorción anti-impactos.
     2. *Zona de Fuerza & Calistenia*: cuerdas de trepar, barras olímpicas, kettlebells y material específico de grip.
     3. *Vestuarios Amplios & Nuevos*: duchas individuales, taquillas y desinfección diaria.
     4. *Ubicación*: C/ de Perú, 14 (Planta G), 03008 Alicante, con accesibilidad y aparcamiento.

3. **Adaptabilidad Responsive:**
   - **Dado** cualquier tamaño de pantalla,
   - **Entonces** el layout se reorganiza limpiamente pasando de 1 columna en móviles a 2 en tablets y 4 en pantallas de escritorio.
