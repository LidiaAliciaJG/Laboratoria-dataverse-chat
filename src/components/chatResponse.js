import { renderError } from "./chat.js";

export const chatCompletions = (apikey, data) => {

  const bodyRequest = {
    "model": "gpt-3.5-turbo",
    "temperature": 0.7, //nivel de creatividad 0 a 1
    "max_tokens": 100,
    "messages": data
  }

  //const response = fetch("https://api.openai.com/v1/chat/completions", {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    body: JSON.stringify(bodyRequest)
  }).then((response) => {
    return response.json();
  })

  /*response.then((resolved) => resolved.json())
  .then((resolved2) => {
    console.log(resolved2);
  });*/

  //return response;
}