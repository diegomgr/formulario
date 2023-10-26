document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const userData = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      fechaNacimiento: formData.get("fechaNacimiento")
  };

  fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("resultado").innerHTML = "Usuario registrado con éxito. " + data.nombre + data.apellido + data.fechaNacimiento;
  })
  .catch(error => {
      document.getElementById("resultado").innerHTML = "Error al registrar el usuario: " + error;
  });
});
