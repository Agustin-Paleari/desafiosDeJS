function Usuario(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.printUsuario = function () {
        console.log(this.nombre + " " + this.apellido);
    }
}



function crear() {
    alert("Vamos a crear un usuario")
    const inputName = prompt("ingrese su nombre");    //Aqui podria usar los input del HTML con GetElementById...
    const inputLastName = prompt("Ingrese su apellido");
    const inputEmail = prompt("Ingrese su Email");

    const usuario = new Usuario(inputName, inputLastName, inputEmail)

    usuario.printUsuario()
}

crear()
