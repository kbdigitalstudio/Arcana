# ARCANA — Assets

Dirección de arte: fotografía editorial, luz lateral, sombras, negro,
marfil, dorado, texturas (manos, cartas, libros, piedra, telas, velas,
espacios íntimos).

## /cards

Placeholders SVG elegantes (línea dorada sobre obsidiana), fácilmente
reemplazables por la ilustración final. Mantener el mismo nombre de archivo
y la referencia en `src/data/cards.ts` seguirá funcionando:

- estrella.svg → XVII La Estrella
- luna.svg → XVIII La Luna
- ermitano.svg → IX El Ermitaño
- templanza.svg → XIV La Templanza
- fuerza.svg → XI La Fuerza
- mundo.svg → XXI El Mundo

## /images

- luna.svg → placeholder del retrato editorial de Luna Álvarez.
  Reemplazar por `luna.jpg` (retrato vertical 4:5, luz lateral, fondo
  oscuro) y actualizar `LunaSection.tsx` para usar `next/image`.
