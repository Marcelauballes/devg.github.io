var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/restartlove.png') {
      miImage.setAttribute('src','images/restartlove.png');
    } else {
      miImage.setAttribute('src', 'images/restartlove.png');
    }
}

var sabor= "chocolate";
/*if (helado==="chocolate"){
    alert("¡SI!Amo el chocolate");
} else {
    alert("Awww mi favorito es el de chocolate");
}
*/
helado(sabor)

function helado(sabor){
    if (sabor === "chocolate"){
        alert("¡SI!Amo el chocolate");
    } else {
        alert("Awww mi favorito es el de chocolate");
    }
}

function multiplica(num1, num2){
    var resultado = num1 * num2; 
    return resultado;
}

alert(multiplica(4, 7));
multiplica(20, 20);
multiplica(2, 4); 

document.querySelector("html").onclick = function onclick() {
    alert("Ouch! deja de pincharme");
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Marcela Urrea');
    localStorage.setItem('Marcela Urrea', miNombre);
    miTitulo.textContent = 'Marcela Urrea,' + miNombre;
}

if (!localStorage.getItem('Marcela Urrea')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('Marcela Urrea');
    miTitulo.textContent = 'Marcela Urrea,' + nombreAlmacenado;
}