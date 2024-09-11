document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para que podamos manejar los datos


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    console.log("Usuario: ", username);
    console.log("Contraseña: ", password);

    // Mostrar los datos 
    const msj = document.getElementById('msj');
    if(username === 'admin' && password === '1234') {
        msj.textContent = 'Inicio de sesión exitoso.';
        msj.style.color = 'green';
    } else {
        msj.textContent = 'Error, intenta de nuevo';
        msj.style.color = 'red';
    }
});
