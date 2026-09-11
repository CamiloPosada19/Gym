# SPEC-07: Membresía y Formulario de Contacto / Clase de Prueba

- **name:** Formulario de Contacto y Solicitud de Clase de Prueba
- **descripcion:** Módulo de captación y membresía que detalla las 6 ventajas principales del club y contiene un formulario interactivo que recoge el nombre del interesado, disciplina y nivel previo, formateando y enviando un mensaje directo a WhatsApp sin requerir backend ni bases de datos externas.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Validación de Campo Obligatorio:**
   - **Dado** el formulario `#founder-form`,
   - **Cuando** el usuario hace clic en el botón de envío sin haber completado el campo de nombre (`#f-name`),
   - **Entonces** el navegador previene el envío y activa la validación nativa HTML5 exigiendo rellenar el campo.

2. **Captura y Generación de Payload para WhatsApp:**
   - **Dado** que el usuario ingresa su nombre (ej. "Alejandro Gómez"), selecciona una disciplina en `#f-interest` y un nivel en `#f-level`,
   - **Cuando** envía el formulario,
   - **Entonces** el script asociado:
     - Detiene la recarga de página mediante `e.preventDefault()`.
     - Construye dinámicamente el mensaje:
       `¡Hola Salva, Carlos y Mirco! Me llamo Alejandro Gómez. Quiero consultar horarios y probar una clase en CHIDAOBA en "[Disciplina Seleccionada]". Mi nivel de partida es: "[Nivel Seleccionado]". ¿Cuándo podría pasarme por el tatami? ¡Un saludo!`
     - Codifica la cadena mediante `encodeURIComponent`.
     - Abre una nueva ventana o pestaña del navegador apuntando a `https://wa.me/34634251393?text=[payload]`.

3. **Despliegue de los 6 Beneficios de Entrenar en Chidaoba:**
   - **Dado** el panel lateral de ventajas,
   - **Entonces** se muestran con claridad los 6 beneficios con su respectivo valor estimado:
     1. Acceso Combinado Judo + BJJ — *Tarifa Plana*.
     2. Clase de Prueba Sin Compromiso — *Prueba Gratis*.
     3. Todos los Niveles Bienvenidos — *Todos los Niveles*.
     4. Seminarios & Masterclasses — *Alto Nivel*.
     5. Zona de Fuerza & Calistenia — *Incluido*.
     6. Descuento en Kimono / Judogi — *Descuento*.
