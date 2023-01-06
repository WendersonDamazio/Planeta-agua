var likeF = "/icons/pingo-dagua-false.svg"
var likeT = "/icons/pingo-dagua-true.svg"
let aux = likeF;
function likee(){
    document.getElementById("like").src = likeT;
    let aux = likeF;
    likeF = likeT;
    likeT = aux;
    let opali = document.getElementById("like");
    opali.style.opacity=1;
}
function opali(){
    if(aux == likeF ){
    let coml = document.getElementById("like");
    coml.style.opacity=0.5;
}
else{
 console.log("opa")
}
}
function opacom(){
    let com = document.getElementById("com");
    com.style.opacity=0.5;
}
function opacomp(){
    let comp = document.getElementById("comp");
    comp.style.opacity=0.5;
}
function opaa(){
    let opali = document.getElementById("like");
    let com = document.getElementById("com");
    let comp = document.getElementById("comp");
    opali.style.opacity=1;
    com.style.opacity=1;
    comp.style.opacity=1;
}
function enviar(post)
{
    document.getElementById(post).style.display = "none";

const $ = nada;

const previewImg = null;
const fileChooser = null;

fileChooser.onchange = e => {
    const fileToUpload = null;
    const reader = null;
    reader.onload = e => previewImg.src = e.target.result;
    reader.readAsDataURL(fileToUpload);
};
}
function postar(post)
{
    document.getElementById(post).style.display = "block";
}
function escm(){
const $ = document.querySelector.bind(document);

const previewImg = $('.imagem');
const fileChooser = $('.input-file');

fileChooser.onchange = e => {
    const fileToUpload = e.target.files.item(0);
    const reader = new FileReader();
    reader.onload = e => previewImg.src = e.target.result;
    reader.readAsDataURL(fileToUpload);
};
}
function limpar(){
    const $ = document.querySelector.bind(document);
    
    const previewImg = $('.imagem');
    const fileChooser = $('.input-file');
    
    fileChooser.onchange = e => {
        const fileToUpload = e.target.files.item(0);
        const reader = new FileReader();
        reader.onload = e => previewImg.src = e.target.result;
        reader.readAsDataURL(fileToUpload);
    };
    }