let programas = document.getElementsByClassName('programa');
let subContainers = document.getElementsByClassName('sub-container');
let aboutPrograma = document.getElementsByClassName('about-programa');
let grafo = document.getElementById('grafo');
let seeing = false;
let scroladas = 0;


translateContents();

hideAbout();

change2thBoxes();

resizeContents();

clickAndSee();



window.addEventListener('resize',function hum(){
    console.log('puts');
    for(let i = 0 ; i < programas.length ; i++){
        programas[i].style.height = subContainers[i].clientHeight+'px';
    }

    translateContents();
    change2thBoxes();
});    
function change2thBoxes(){
    let titles = document.getElementsByClassName('title-plus');
    let programNumbers = document.getElementsByClassName('numero');

    for(let i = 0 ; i < titles.length ; i++){
        if(i % 2 == 0){

            if (window.matchMedia("(max-width: 570px)").matches) {
                titles[i].style.display = 'flex';
                console.log("oops");
            }
            else{
                titles[i].style.display = 'flex';
                titles[i].style.justifyContent = 'space-between';
            }
        }
    }
}
function clickAndSee(){
    for(let i = 0 ; i < programas.length ; i++){
        programas[i].addEventListener('click',function idontknow(){
            if(aboutPrograma[i].style.display == 'none'){
                hideAbout();
                aboutPrograma[i].style.display = 'block';
                document.getElementsByClassName('linha-horizontal')[i].style.display = 'none';
                resizeContents();
            }
            else{
                aboutPrograma[i].style.display = 'none'
                console.log(aboutPrograma[i].style.display);
                document.getElementsByClassName('linha-horizontal')[i].style.display = 'block';
                resizeContents();
            }
        });
    }
}
//funcao para igualar o comprimento de cada div ao comprimento do contúdo de cada uma dela
function resizeContents(){
    for(let i = 0 ; i < programas.length ; i++){
        programas[i].style.height = subContainers[i].clientHeight+'px';
    }
};
function hideAbout(){
    for(let i = 0 ; i < aboutPrograma.length ; i++){
        aboutPrograma[i].style.display = 'none';
        document.getElementsByClassName('linha-horizontal')[i].style.display = 'block';
    }
}
function translateContents(){
    if (window.matchMedia("(max-width: 570px)").matches){
    }
    else{
        for(let i = 0 ; i < programas.length ; i++){
            if(i % 2 != 0){
                programas[i].style.transform = 'translateY(60px)';
            }
            else{
                programas[i].style.transform = 'translateY(0%)';
    8        }
        }
    }
}

// window.addEventListener("scroll", function() {
//     scroladas++;
//     console.log("scrollei");
//     grafo.style.transform = 'rotate('+(scroladas/6)+'deg)';
//   });
