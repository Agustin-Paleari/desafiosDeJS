function Usuario(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.printUsuario = function () {
        console.log(this.nombre + " " + this.apellido);
    }
}

const USUARIOS = [];

function crear() { 
    alert("Vamos a crear un usuario")
    for (let i = 0; i < 3; i++) {
        
        const inputName = prompt("ingrese su nombre");    //Aqui podria usar los input del HTML con GetElementById...
        const inputLastName = prompt("Ingrese su apellido");
        const inputEmail = prompt("Ingrese su Email");
        
        const usuario = new Usuario(inputName, inputLastName, inputEmail);
        USUARIOS.push(usuario);
        
        usuario.printUsuario();
    }

} 

crear(); 
