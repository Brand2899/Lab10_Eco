(()=>{const e=document.getElementById("nombre"),t=document.getElementById("apellido"),n=document.getElementById("usuario"),o=document.getElementById("correo"),r=document.getElementById("contraseña"),l=document.getElementById("contraseñaConfirmar"),a=document.getElementById("bnRegistrar");registrar=()=>{let a=e.value,c=t.value,d=n.value,u=o.value,m=r.value;if(m!==l.value)return void alert("contraseñas no coinciden");let i={nombre:a,apellido:c,usuario:d,correo:u,contraseña:m},s=JSON.stringify(i);console.log(i),console.log(s)},a.addEventListener("click",registrar)})();