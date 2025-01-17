fetch('layouts/menu.html')  // Ruta actualizada
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar el menú: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('menu').innerHTML = data;
      })
      .catch(error => console.error('Error al cargar el menú:', error));