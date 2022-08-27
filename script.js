var player;
var bot;
var numJog = 0;
var venceu = false;
var pontDog = 0, pontCat = 0;

function habilitarInicio(){
    document.getElementById("iniciar").disabled = false;
}

function selecionarIcon(id){ //mudar o background do player selecionado

    if(id == "icon-dog"){
        document.getElementById("icon-dog").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        document.getElementById("icon-cat").style.backgroundColor = "rgba(0, 0, 0, 0)";

    }else{
        document.getElementById("icon-cat").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        document.getElementById("icon-dog").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

function escolhaPlayer(){//definir o player que começa

    if(document.querySelector('input[name="player"]:checked').value == "Dog"){
        player = "Dog";
        bot = "Cat";
        document.getElementById("msg").innerHTML = 'Vez de  <img src="img/dog-face.png" alt="dog" width="40px">';
    }else{
        player = "Cat";
        bot = "Dog";
        document.getElementById("msg").innerHTML = 'Vez de  <img src="img/cat-face.png" alt="cat" width="40px">';
    }
}

//mostrar ou esconder as divs dependendo da tela
function telaInicial(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "table";
}

function telaPrincipal(){
    document.getElementById("inicio").style.display = "table";
    document.getElementById("jogo").style.display = "none";
    document.getElementById("placar-dog").innerHTML = pontDog;
    document.getElementById("placar-cat").innerHTML = pontCat;
}

function checkjogo(id){
    
    if(venceu){
        return false;
    }
    
    var pc = document.getElementById('cpu').checked;
    
    var opt = verificarSrc(id);


    if(opt == "transp.png"){

        document.getElementById(id).src = "img/" + player + ".png";
        
        numJog++;

        if(player == "Cat"){
            document.getElementById("cat-audio").play();

        }else{
            document.getElementById("dog-audio").play();
        }
        
        if(winCheck()){
            document.getElementById("msg").innerHTML = "Fim de Jogo! " + player + " venceu!";
            document.getElementById("principal").style.backgroundImage= "url(img/firework.gif)";

            if(player == "Cat"){
                pontCat++;

            }else{
                pontDog++;
            }
            venceu = true;

            return false;
        }
        
        if(numJog >= 9){
            document.getElementById("msg").innerHTML = "Fim de jogo! Deu velha!!!";
            return false;
        }
        
        if(player == "Cat"){
            document.getElementById("msg").innerHTML = 'Vez de <img src="img/dog-face.png" alt="dog" width="40px">';
            player = "Dog";

        }else{
            document.getElementById("msg").innerHTML = 'Vez de <img src="img/cat-face.png" alt="cat" width="40px">';
            player = "Cat";
        }
    }

    if(pc && player == bot){

        setTimeout (() => {checkjogo(jogoDoPc())}, 400);
    }
}

function jogoDoPc(){

    return 'c' + Math.floor((Math.random() * 9) + 1);
}

function verificarSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

//verificar se alguém ganhou
function winCheck(){
    if((verificarSrc('c1') == verificarSrc('c2')) && (verificarSrc('c1') == verificarSrc('c3')) && verificarSrc('c1') != "transp.png"){
        document.getElementById("h1").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h2").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h3").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c4') == verificarSrc('c5')) && (verificarSrc('c4') == verificarSrc('c6')) && verificarSrc('c4') != "transp.png"){
        document.getElementById("h4").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h5").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h6").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c7') == verificarSrc('c8')) && (verificarSrc('c7') == verificarSrc('c9')) && verificarSrc('c7') != "transp.png"){
        document.getElementById("h7").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h8").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h9").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c1') == verificarSrc('c4')) && (verificarSrc('c1') == verificarSrc('c7')) && verificarSrc('c1') != "transp.png"){
        document.getElementById("h1").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h4").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h7").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c2') == verificarSrc('c5')) && (verificarSrc('c2') == verificarSrc('c8')) && verificarSrc('c2') != "transp.png"){
        document.getElementById("h2").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h5").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h8").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c3') == verificarSrc('c6')) && (verificarSrc('c3') == verificarSrc('c9')) && verificarSrc('c3') != "transp.png"){
        document.getElementById("h3").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h6").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h9").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c1') == verificarSrc('c5')) && (verificarSrc('c1') == verificarSrc('c9')) && verificarSrc('c1') != "transp.png"){
        document.getElementById("h1").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h5").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h9").style.backgroundColor = "rgb(47, 255, 141)";
        return true;

    }else if((verificarSrc('c3') == verificarSrc('c5')) && (verificarSrc('c3') == verificarSrc('c7')) && verificarSrc('c3') != "transp.png"){
        document.getElementById("h3").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h5").style.backgroundColor = "rgb(47, 255, 141)";
        document.getElementById("h7").style.backgroundColor = "rgb(47, 255, 141)";
        return true;
    }
    return false;
}

function reload(){
    numJog = 0;
    venceu = false;

    document.getElementById("c1").src = "img/transp.png";
    document.getElementById("c2").src = "img/transp.png";
    document.getElementById("c3").src = "img/transp.png";
    document.getElementById("c4").src = "img/transp.png";
    document.getElementById("c5").src = "img/transp.png";
    document.getElementById("c6").src = "img/transp.png";
    document.getElementById("c7").src = "img/transp.png";
    document.getElementById("c8").src = "img/transp.png";
    document.getElementById("c9").src = "img/transp.png";

    document.getElementById("h1").style = "none";
    document.getElementById("h2").style = "none";
    document.getElementById("h3").style = "none";
    document.getElementById("h4").style = "none";
    document.getElementById("h5").style = "none";
    document.getElementById("h6").style = "none";
    document.getElementById("h7").style = "none";
    document.getElementById("h8").style = "none";
    document.getElementById("h9").style = "none";

    document.getElementById("principal").style = "none";
}