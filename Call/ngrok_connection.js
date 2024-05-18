// Require ngrok javascript sdk
const ngrok = require("@ngrok/ngrok");
// import ngrok from '@ngrok/ngrok' // if inside a module

(async function() {
  // Establish connectivity
  const listener = await ngrok.forward({ addr: "http://localhost:8080/", authtoken_from_env: true });

  // Output ngrok url to console
  console.log(`Ingress established at: ${listener.url()}`);
  console.log(listener.id())
  const listeners = await ngrok.listeners();
  console.log(listeners[0].id())
})();

