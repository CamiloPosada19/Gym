# SPEC-09: Widget Flotante de WhatsApp con Burbuja Emergente

- **name:** Botón Flotante Reactivo de WhatsApp con Tooltip Conversacional
- **descripcion:** Botón de acción flotante fijado en la esquina inferior derecha con animación continua de pulso (`animate-pulse-glow`), acompañado de una burbuja de mensaje emergente retardada que simula un chat en línea con los entrenadores.
- **estado:** Implementado y Funcionando (Producción)

## Criterios de Aceptación

1. **Posicionamiento y Estilo Flotante:**
   - **Dado** cualquier estado de scroll de la página,
   - **Entonces** el widget permanece anclado en la posición `fixed bottom-6 right-6 z-50`.
   - **Y además**, el botón principal cuenta con el verde oficial de WhatsApp (`#25D366`), efecto pulsante (`animate-pulse-glow`) y anillo de difusión animado (`animate-ping`).

2. **Aparición Temporizada de la Burbuja (Timer):**
   - **Dado** que un usuario carga la página web,
   - **Cuando** transcurren 2.200 ms desde la carga,
   - **Entonces** el contenedor `#wa-bubble` transiciona de invisible a visible removiendo las clases `opacity-0`, `translate-y-3` y `pointer-events-none`.

3. **Cierre Manual de la Burbuja:**
   - **Dado** que la burbuja conversacional está abierta,
   - **Cuando** el usuario pulsa el botón de cierre (`#wa-close-bubble`),
   - **Entonces** la burbuja se oculta inmediatamente aplicando nuevamente las clases `opacity-0`, `translate-y-3` y `pointer-events-none`, sin provocar recargas de página ni afectar al botón principal.

4. **Acceso Directo al Chat:**
   - **Dado** que el usuario hace clic en el botón verde o en el botón "Chatear por WhatsApp ahora" del tooltip,
   - **Entonces** se abre WhatsApp enlazando al número `+34 634 25 13 93` con el texto preconfigurado para consultar horarios y solicitar clase de prueba.
