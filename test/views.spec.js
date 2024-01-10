//verifica que un elemento está creado dentro de una vista (puede ser que verifica si está definido un header en la vista home por ejemplo).

import { inicio } from "../src/views/home.js";
import { getKey } from '../src/views/apiKey.js';
import { chatgrupal } from "../src/views/groupChat.js";
import { personaje } from "../src/views/characterChat.js";

const vistaInicio = inicio();

describe('En la vista home:', () => {
  it('se define un menú nav', () => {
    expect(vistaInicio.innerHTML).toContain('<nav>')
  });
});

const vistaApi = getKey();

describe('En la vista apiKey:', () => {
  it('contiene un form para ingresar datos', () => {
    const formElement = vistaApi.querySelector('[data-testid="form-element"]');
    expect(formElement).toBeTruthy();
  });
});

const vistaPanel = chatgrupal();

describe('En la vista panel:', () => {
  it('contiene un contenedor que visualiza los mensajes', () => {
    const chatElement = vistaPanel.querySelector('[data-testid="chat-element"]');
    expect(chatElement).toBeTruthy();
  });
  it('contiene un form para ingresar los mensajes', () => {
    const chatElement = vistaPanel.querySelector('[data-testid="message-element"]');
    expect(chatElement).toBeTruthy();
  });
});

const vistaPersonaje = personaje( { "id": "resident-evil-1" });

describe('En la vista personaje:', () => {
  it('contiene un contenedor que visualiza los mensajes', () => {
    const chatElement = vistaPersonaje.querySelector('[data-testid="chat-element"]');
    expect(chatElement).toBeTruthy();
  });
  it('contiene un form para ingresar los mensajes', () => {
    const chatElement = vistaPersonaje.querySelector('[data-testid="message-element"]');
    expect(chatElement).toBeTruthy();
  });
});

//componentes : boton tal, llame a navigate To