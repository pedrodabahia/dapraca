const btn = document.querySelector('#btnForm');
const cidade = document.querySelector('select');
const politic = document.querySelector('.formulario .formContent form #politicaPrivac a');
const frame = document.querySelector('.framePolitica');
const display = window.getComputedStyle(frame, null).display;
const fechar = document.querySelector(".feixar");

politic.addEventListener('click', () => {
    display == "none" ? frame.style.display = "block" : () => {} 
    fechar.addEventListener('click', () => { frame.style.display = "none" })
})



btn.addEventListener('click', (e) => {
    e.preventDefault();

    switch(cidade.selectedIndex){
        case 0:
        window.location.href = "https://chat.whatsapp.com/GEz8Y8lv8iP199IG5WXQkr";
        break;
        window.location.href = "https://chat.whatsapp.com/J7vSp3d4mwPBJaEmbStoPP";
        break;
        case 2 :
        window.location.href = "https://chat.whatsapp.com/Gnc21qUogOa5NYGzR033sM"; 
        break;
        case 3:
        window.location.href = "https://chat.whatsapp.com/JVkyD6mW1dXKNvUDAmjGDy";
        case 4:
        window.location.href = "https://chat.whatsapp.com/KZOO4rSC85aIF465IRE8Pg";
        break;
        case 5: 
        window.location.href = "https://chat.whatsapp.com/GEz8Y8lv8iP199IG5WXQkr";
        break;                        

    }
})
var timing;
const elementos = [];
const opacidade = [];

elementos [0] = document.querySelector("#PostoDaMata");
elementos [1] = document.querySelector("#Itabata");
elementos [2] = document.querySelector("#Mucuri");
elementos [3] = document.querySelector("#Prado");
elementos [4] = document.querySelector("#Itamaraju");
opacidade [0] = document.querySelector("#opacPdm");
opacidade [1] = document.querySelector("#opacMuc");
opacidade [2] = document.querySelector("#opacItab");
opacidade [3] = document.querySelector("#opacPrad");
opacidade [4] = document.querySelector("#opacIta");

//   var larguraPrimord = window.innerWidth;
//   var alturaPrimord = window.innerHeight;
//   document.querySelector("#roteador").innerText = alturaPrimord;

function sslider(){    
var largura = window.innerWidth;
var altura = window.innerHeight;
const contentSlide = document.querySelector(".slidecontent");
contentSlide.style.top = "1vw";
contentSlide.style.left = "15vw";


    clearInterval(timing);


    

if(largura < altura){

for(let s = 0; s <= 4; s++ ){
elementos[s].style.width = "14vw";
elementos[s].style.height = "23vw";
elementos[s].style.marginTop = "-1.5vw";
opacidade[s].style.width = "14vw";
opacidade[s].style.height = "23vw";
opacidade[s].style.marginTop = "0vw";
}
contentSlide.style.top = "-20vw"
contentSlide.style.left = "0"


const bodyElement = document.querySelector("body");
let i = 0;


timing = setInterval(() => {

elementos[i].style.width = "17vw";
elementos[i].style.height = "23vw";
elementos[i].style.marginTop = "-1vw";    
opacidade[i].style.width = "14vw";
opacidade[i].style.height = "23vw";
opacidade[i].style.marginTop = "0vw";    

i++
if( i > 4){
    i = 0
} 

elementos[i].style.width = "26vw";
elementos[i].style.height = "31vw";
elementos[i].style.marginTop = "-5vw";
opacidade[i].style.width = "26vw";
opacidade[i].style.height = "31vw";
opacidade[i].style.marginTop = "-5vw";
 
 

},3000);
}else{
    console.log(opacidade)
    for(let s = 0; s <= 4; s++ ){
elementos[s].style.width = "14vw";
elementos[s].style.height = "16vw";
elementos[s].style.marginTop = "-2vw";
opacidade[s].style.width = "14vw";
opacidade[s].style.height = "16vw";
    }
}
}



if(larguraPrimord < alturaPrimord){ sslider()}




window.addEventListener("resize", sslider());
