# Memoria Técnica de Cambios — Retirada de Mirco Biscarini y Luis Planelles Mira

**Fecha:** 7 de octubre de 2026  
**Rama de origen:** `feature/horario-kick-boxing` (commit `c142a34`)  
**Rama de publicación:** `feature/remover-mirco-y-luis`  
**Archivo de parche de respaldo:** `../backup_revert_mirco_luis.patch` (en la raíz del proyecto)

---

## 1. Motivo del Cambio
Solicitud expresa del usuario para eliminar del sitio web de Club Chidaoba toda mención, imagen, perfil y referencia a los entrenadores **Mirco Biscarini** y **Luis Planelles Mira**.

---

## 2. Archivos Modificados y Detalle de Cambios

### A. `src/components/AboutSalva.astro`
- **Tarjetas de entrenadores:** Eliminadas las tarjetas de perfil de Mirco Biscarini (Coach 3, BJJ) y Luis Planelles Mira (Coach 4, BJJ Kids).
- **Arrays de datos:** Eliminados `palmaresMirco` y `palmaresLuis` del frontmatter.
- **Estructura de cuadrícula:** Se cambió la distribución de 4 columnas a 2 columnas centradas (`grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto`) para destacar a **Salvador Cases** y **Carlos Cases**.
- **Subtítulo:** Actualizado el texto introductorio para enfocar el dojo en los hermanos Cases.
- **Galería oficial:** Se reemplazó la fotografía de acción de Mirco (`mirco_bjj_action.jpg`) por la de Salvador Cases en el podio nacional absoluto (`salva_podium_absoluto.jpg`).

### B. `src/components/Hero.astro`
- **Insignias superiores:** Retiradas las píldoras de Mirco Biscarini y Luis Planelles (manteniendo las de Salva Cases y Carlos Cases).
- **Subtítulo principal:** Ajustado para retirar los nombres de Mirco (@mibisjj) y Luis.

### C. `src/components/Footer.astro`
- **Texto corporativo:** Ajustado el resumen del templo marcial para mencionar únicamente a Salvador y Carlos Cases.
- **Redes sociales:** Retirado el enlace a la cuenta de Instagram de Mirco (`@mibisjj`).
- **Copyright:** Actualizado a `© 2026 Club de Judo & BJJ Chidaoba · Salvador Cases & Carlos Cases. Todos los derechos reservados.`

### D. `src/components/ScheduleFAQ.astro`
- **FAQs (Preguntas Frecuentes):**
  - FAQ 1: Retirada la mención de Mirco en la explicación del nombre Chidaoba.
  - FAQ 3: Ajustada la respuesta del equipo docente de BJJ y disciplinas asociadas.
- **Subtítulo de Horarios:** Eliminado Mirco de los directores de clases.
- **Banner promocional:** Texto de la insignia inferior actualizado a `SALVADOR & CARLOS CASES · JUDO OLÍMPICO & BJJ`.

### E. `src/components/FoundersPass.astro`
- **Masterclasses:** Retirada la mención a Mirco en las clases magistrales.
- **Formulario WhatsApp:** Actualizado el texto de atención para indicar que responderán Salvador o Carlos.

### F. `src/components/Disciplines.astro`
- **Alt de imagen:** Retirada la mención a Mirco en el atributo `alt` de la foto de BJJ.

### G. Metadatos SEO (`src/layouts/Layout.astro` y `src/pages/index.astro`)
- **Meta description:** Eliminada la referencia a Mirco en las descripciones Open Graph y estándar.

### H. Motores de Traducción (`public/js/translations.js` e `i18n.js`)
- Limpieza y actualización de todas las claves en español (`es`) e inglés (`en`).
- Eliminadas las claves obsoletas (`about.mirco*` y `about.luis*`).

---

## 3. Instrucciones de Reversión (Cómo Deshacer los Cambios)

Si en el futuro se desea restaurar el contenido anterior de Mirco y Luis, existen tres métodos sencillos:

### Método 1: Volver a la rama anterior en Git (Recomendado)
Para descartar esta rama y regresar a la versión previa:
```bash
git checkout feature/horario-kick-boxing
```

### Método 2: Revertir el commit en esta rama
Una vez comiteado, se puede crear un commit que deshaga exactamente estos cambios:
```bash
git revert HEAD --no-edit
git push origin feature/remover-mirco-y-luis
```

### Método 3: Aplicar el parche inverso
Desde la raíz del repositorio (`Gym`):
```bash
git apply -R ../backup_revert_mirco_luis.patch
```
Esto restaurará exactamente los archivos a su estado previo.

---
**Nota sobre activos multimedia:** Los archivos de imagen originales (`mirco_biscarini_real.jpg`, `mirco_bjj_action.jpg`, `luis_bjj.jpg`, etc.) siguen existiendo físicamente en `public/images/` por seguridad, simplemente no están enlazados ni referenciados en ningún componente del proyecto.
