//Declaración de Variables para Vincular Objetos de Formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generación de Evento  
formulario.addEventListener('submit', login);

//Funciones a Ejecutar
function login(e){
    e.preventDefault();
   
    let usuarioVal = usuario.value;
    let passwordVal = password.value;
    
    if(usuarioVal == '' || passwordVal == ''){
       crearMensaje('Verificar campos');
        return;
    }

    //Aquí tenemos error
    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));
        console.log('USER ' + objeto.usuario)
        
        console.log(passwordVal)
        if(usuarioVal == objeto.usuario && passwordVal== objeto.pass){
            crearMensaje('Usuario y Contraseña correctos','success');
            localStorage.setItem('sesion', 'activa'); 
            setTimeout(function(){
                window.open('./inicio.html', 'self');
            },3000);
    } else {
        crearMensaje('Usuario y contraseña incorrectos','danger');

       }
    } else {
    crearMensaje('Usuario y Contraseña no existentes','danger');
    
    }
    
}
