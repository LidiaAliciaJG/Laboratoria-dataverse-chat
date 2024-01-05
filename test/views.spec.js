//verifica que un elemento está creado dentro de una vista (puede ser que verifica si está definido un header en la vista home por ejemplo).

import { inicio } from "../src/views/home";

const vista = inicio();

describe('En la vista home:', () => {
  it('se define un menú nav', () => {
    expect(vista.innerHTML).toContain('<nav>')
  });
});