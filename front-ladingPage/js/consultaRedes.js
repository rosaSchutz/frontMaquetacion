document.addEventListener('DOMContentLoaded', function () {
  const url = 'http://localhost:3000/api/redes/';
  //const tbody = document.getElementById('campos-pacientesGetAll');

  // Configuración para las solicitudes fetch
  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Función para consultar enlaces y renderizarlos
  async function consultarEnlaces(url, settings) {
    try {
      const response = await fetch(url, settings);

      if (!response.ok) {
        throw new Error(`Error de HTTP: ${response.status}`);
      }

      const enlaces = await response.json();

      console.log("Consulta exitosa url: ");
      const iconUrl = enlaces.docs[0].description[0].children[1].url;
      console.log(iconUrl);

      console.log("Consulta exitosa icon: ");
      const iconImg = enlaces.docs[0].icons.url;
      console.log(iconImg);

    } catch (error) {
      mostrarError(`Error al obtener enlaces: ${error.message}`);
    }
  }

  // Evento de carga para consultar enlaces
  consultarEnlaces(url, settings);
});