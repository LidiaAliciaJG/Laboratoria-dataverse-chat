Esta carpeta generalmente contiene archivos de los componentes que representan las diferentes páginas o vistas de tu aplicación. Cada vista (view) puede tener su propio archivo JavaScript, que exporta una función que es responsable de generar los elementos del DOM.


    //for (let i = 0; i < data.length; i++) {
    //let element = data[i];
    /*const sendMessageWithStatus = (element) => {
      return new Promise((resolve) => {
        setTimeout(()=>{
        sendMessage(message, element).then((response) => {
          response.json().then((response2) => {
            console.log(response2);
            if (response2.error) {
              const messageError = response2.error.message;
              renderError(messageError, errorContainer);
            } else {
                typingStatus(chars_statusContainer, "escribiendo...", element);
                const messageResponse = response2.choices[0].message.content;
                addMessage(messageResponse, "assistant", messagesContainer);
            }
            resolve();
          });
        });
      }, 1000);
      });
      //}
      //});
    };
  
    const messagePromises = data.map((element) => sendMessageWithStatus(element));
    
    Promise.all(messagePromises).then(() => {
      console.log("todos los mensajes enviados");
      typingStatus(chars_statusContainer, "none", "");
    });*/


    //IDEA DE CHATGPT: [Estudiarla, adaptarla, entenderla]
    /*const sendMessageWithStatus = (elements, index) => {
      return new Promise((resolve) => {
        if (index < elements.length) {
          const element = elements[index];
  
          // Descomenta el siguiente bloque de código para agregar un retraso de 1 segundo
          setTimeout(() => {
            typingStatus(chars_statusContainer, "escribiendo...", element);
            sendMessage(message, element).then((response) => {
              response.json().then((response2) => {
                if (response2.error) {
                  const messageError = response2.error.message;
                  renderError(messageError, errorContainer);
                } else {
                  const messageResponse = response2.choices[0].message.content;
                  addMessage(messageResponse, "assistant", messagesContainer);
                }
  
                // Llama recursivamente a la función para el siguiente elemento
                sendMessageWithStatus(elements, index + 1).then(() => {
                  resolve();
                });
              });
            });
          }, 900); // Retraso de # segundo
        } else {
          // Cuando se haya procesado todos los elementos, resuelve la promesa
          resolve();
        }
      });
    };
    const messagePromises = sendMessageWithStatus(data, 0);
    messagePromises.then(() => {
      console.log("todos los mensajes enviados");
      typingStatus(chars_statusContainer, "none", "");
    });*/
//termina