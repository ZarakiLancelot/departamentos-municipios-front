// URL de tu API Rest
const apiUrl = 'http://localhost:3000/api/datos'; // Reemplaza esto con la URL de tu API

// Función para cargar los departamentos y municipios
function cargarDatos() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const departamentosSelect = document.getElementById('departamentos');
      const municipiosSelect = document.getElementById('municipios');

      // Limpiamos el contenido anterior
      departamentosSelect.innerHTML = '';
      municipiosSelect.innerHTML = '';

      data.departamentos.forEach(departamento => {
        const option = document.createElement('option');
        option.text = departamento.departamento; // Utilizamos "departamento" en lugar de "title"
        departamentosSelect.add(option);
      });

      // Llamamos a la función cargarMunicipios cuando se seleccione un departamento
      departamentosSelect.addEventListener('change', cargarMunicipios);

      // Cargamos los municipios correspondientes al departamento inicial seleccionado
      cargarMunicipios();
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
}

// Función para cargar los municipios correspondientes al departamento seleccionado
function cargarMunicipios() {
  const departamentosSelect = document.getElementById('departamentos');
  const municipiosSelect = document.getElementById('municipios');
  const departamentoSeleccionado = departamentosSelect.value;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const departamento = data.departamentos.find(d => d.departamento === departamentoSeleccionado);

      if (departamento) {
        municipiosSelect.innerHTML = ''; // Limpiamos el contenido anterior

        departamento.municipios.forEach(municipio => {
          const option = document.createElement('option');
          option.text = municipio;
          municipiosSelect.add(option);
        });
      } else {
        municipiosSelect.innerHTML = ''; // Limpiamos el contenido anterior si no se encontró el departamento
        const option = document.createElement('option');
        option.text = 'Selecciona un departamento válido';
        municipiosSelect.add(option);
      }
    })
    .catch(error => {
      console.error('Error al cargar los municipios:', error);
    });
}


// Cargamos los departamentos y municipios al cargar la página
cargarDatos();
