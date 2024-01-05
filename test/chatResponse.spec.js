import { chatCompletions } from "../src/lib/chatResponse.js";

const OpenIAResponse = jest.fn();

// hacer implementación falsa de fetch
global.fetch = jest.fn(() => Promise.resolve({
  json: OpenIAResponse
}));


describe('Endpoint de openIA', () => {
  it('La API es llamada con los datos adecuados', () => {

    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: 'foo' }] });

    const messages = [{ role: 'user', content: 'foo' }];

    chatCompletions('12456', messages);

    expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 12456`,
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        "temperature": 0.7,
        "max_tokens": 100,
        messages,
      })
    });
  });

  it('El endpoint responde de manera correcta', () => {

    const response = {
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "¡Hola!"
          }
        }]
    };

    OpenIAResponse.mockResolvedValueOnce(response);


    return chatCompletions('12345', [{ role: 'user', content: 'foo' }])
      //.then((resolved) => resolved.json())
      .then((resolved) => {
        expect(resolved).toBe(response);
      });
  });
})
