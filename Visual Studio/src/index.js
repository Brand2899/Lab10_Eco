import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import { getFirebaseConfig } from './firebase-config'

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

function registerUser(objetoUsuario){
    //Obtener base de datos
    const db = getDatabase();
    //Escribir un nuevo usuario
}

//DECLARACIONES
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const contraseñaConfirmar = document.getElementById('contraseñaConfirmar');
const bnRegistrar = document.getElementById('bnRegistrar');

//FUNCIONES
registrar = () => {
    let n = nombre.value;
    let a = apellido.value;
    let u = usuario.value;
    let co = correo.value;
    let con = contraseña.value;
    let ccon = contraseñaConfirmar.value;

    if(con !== ccon){
        alert('contraseñas no coinciden');
        return;
    }

    let objetoUsuario = {
        nombre: n,
        apellido: a,
        usuario: u,
        correo: co,
        contraseña: con
    };

    let json = JSON.stringify(objetoUsuario);

    console.log(objetoUsuario);
    console.log(json);
}

bnRegistrar.addEventListener('click', registrar);