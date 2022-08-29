const inputTexto = document.querySelector(".ingreso-texto");
const mensaje = document.querySelector(".mensaje");
const matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
const cuadro = document.querySelector(".cuadro-mensaje");
const buttoncopiar= document.querySelector(".copiar");
const leyenda= document.querySelector(".cuadro-mensaje p");
const leyenda2= document.querySelector(".cuadro-mensaje h1");
function buttonEncriptar(){
    const textoEncriptado = Encriptar(inputTexto.value);
    cuadro.style.backgroundImage = "none";
    leyenda.style.display = "none";
    leyenda2.style.display = "none";
    mensaje.style.display="inline";
    buttoncopiar.style.display="block"
    mensaje.value = textoEncriptado;
    inputTexto = ""
   

}
function buttonDesencriptar(){
    const textoDesencriptado = Desencriptar(inputTexto.value);
    mensaje.style.backgroundImage = "none";
    mensaje.value = textoDesencriptado;
    inputTexto = ""
}
function Encriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i =0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function Desencriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i =0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
}