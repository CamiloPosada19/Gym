# SPEC-06: Módulo de Instalaciones y Tatami de Competición

- **name:** Exhibición del Dojo e Infraestructura Deportiva
- **descripcion:** Sección descriptiva de las instalaciones del nuevo club ubicado en C/ de Perú, 14 (Planta G), 03008 Alicante. Destaca los 2 tatamis oficiales de competición (100 m² en planta baja y 70 m² en altillo) con amortiguación anti-impactos, vestuarios y climatización de alta potencia.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Recorrido en Video del Dojo:**
   - **Dado** el módulo de instalaciones,
   - **Entonces** se muestra el video panorámico 16:9 con HUD FPV continuo y pie con la indicación "2 Tatamis Oficiales de Competición (100 m² + 70 m²)".

2. **Grid de Especificaciones Técnicas:**
   - **Dado** el bloque de características de la instalación,
   - **Entonces** se muestran 4 tarjetas diferenciadas con icono y descripción:
     1. *Tatami Planta Baja (100 m²)*: superficie de competición con cámara de absorción anti-impactos.
     2. *Tatami Planta Alta (70 m²)*: tatami independiente para tecnificación, randori y grupos de combate.
     3. *Vestuarios Amplios & Nuevos*: duchas individuales, taquillas y desinfección diaria.
     4. *Ubicación*: C/ de Perú, 14 (Planta G), 03008 Alicante, con accesibilidad y aparcamiento.

3. **Adaptabilidad Responsive:**
   - **Dado** cualquier tamaño de pantalla,
   - **Entonces** el layout se reorganiza limpiamente pasando de 1 columna en móviles a 2 en tablets y 4 en pantallas de escritorio.
