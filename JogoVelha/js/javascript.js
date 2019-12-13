var player, cont=0, checar=true;
var idsEspacos = ["c1","c2","c3","c4","c5","c6","c7","c8","c9"];
var espacosOcupados = ["", "", "", "", "", "", "", "", ""];

function mudaCor(i, id){
    if(i==1)
    document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.1)";
    if(i==0)
    document.getElementById(id).style.backgroundColor = "white";
}

function ganhador(){
    if((espacosOcupados[0]=="1" && espacosOcupados[1]=="1" && espacosOcupados[2]=="1") || 
        (espacosOcupados[3]=="1" && espacosOcupados[4]=="1" && espacosOcupados[5]=="1") ||
        (espacosOcupados[6]=="1" && espacosOcupados[7]=="1" && espacosOcupados[8]=="1") ||
        (espacosOcupados[0]=="1" && espacosOcupados[4]=="1" && espacosOcupados[8]=="1") ||
        (espacosOcupados[2]=="1" && espacosOcupados[4]=="1" && espacosOcupados[6]=="1") ||
        (espacosOcupados[0]=="1" && espacosOcupados[3]=="1" && espacosOcupados[6]=="1") ||
        (espacosOcupados[1]=="1" && espacosOcupados[4]=="1" && espacosOcupados[7]=="1") ||
        (espacosOcupados[2]=="1" && espacosOcupados[5]=="1" && espacosOcupados[8]=="1")){
            var texto = "Vencedor - Haley";
            document.getElementById("titulo").innerHTML = texto;
            document.getElementById("imgJogador1").src = "assets/Haley_Happy.png"
            document.getElementById("imgJogador2").src = "assets/Abigail_Surprised.png"
            return false;
    }else
    if((espacosOcupados[0]=="2" && espacosOcupados[1]=="2" && espacosOcupados[2]=="2") || 
        (espacosOcupados[3]=="2" && espacosOcupados[4]=="2" && espacosOcupados[5]=="2") ||
        (espacosOcupados[6]=="2" && espacosOcupados[7]=="2" && espacosOcupados[8]=="2") ||
        (espacosOcupados[0]=="2" && espacosOcupados[4]=="2" && espacosOcupados[8]=="2") ||
        (espacosOcupados[2]=="2" && espacosOcupados[4]=="2" && espacosOcupados[6]=="2") ||
        (espacosOcupados[0]=="2" && espacosOcupados[3]=="2" && espacosOcupados[6]=="2") ||
        (espacosOcupados[1]=="2" && espacosOcupados[4]=="2" && espacosOcupados[7]=="2") ||
        (espacosOcupados[2]=="2" && espacosOcupados[5]=="2" && espacosOcupados[8]=="2") ){
            var texto = "Vencedor - Abigail";
            document.getElementById("titulo").innerHTML = texto;
            document.getElementById("imgJogador2").src = "C:/Users/João Pedro/Documents/JavaScript/Exemplos JS/assets/Abigail_Happy.png"
            document.getElementById("imgJogador1").src = "C:/Users/João Pedro/Documents/JavaScript/Exemplos JS/assets/Haley_Dirty_Surprised.png"
            return false;
    }else return true;
}

function maquina(){
    if(cont>=9){
        var texto = "Empate";
        document.getElementById("titulo").innerHTML = texto;
        return;
    }
    if(checar){
        checar = ganhador();
    }
    if(checar==false){
        return;
    } else {
        var x = (Math.floor(Math.random() * 10 - 1));
        if(x<0){
            maquina();
            return;
        }
        var id = idsEspacos[x];
        if(player==1){
            if(document.getElementById(id).childElementCount<1){
                var b = document.createElement("img");
                b.src= "C:/Users/João Pedro/Documents/JavaScript/Exemplos JS/assets/Pumpkin.png";
                document.getElementById(id).appendChild(b);
                var classe = document.getElementsByTagName("i");
                espacosOcupados[x] = "2";
                cont++;
                checar = ganhador();
            } else {
                maquina();
            }
        } else {
            if(document.getElementById(id).childElementCount<1){
                var b = document.createElement("img");
                b.src= "C:/Users/João Pedro/Documents/JavaScript/Exemplos JS/assets/Melon.png";
                
                document.getElementById(id).appendChild(b);
                var classe = document.getElementsByTagName("i");
                espacosOcupados[x] = "1";
                cont++;
                checar = ganhador();
            } else {
                maquina();
            }
        }
    }
    
}

function adiciona(id){
    if(cont>=9){
        return;
    }
    if(checar){
        checar = ganhador();
    }
    if(checar==false){
        return;
    }else{
        if(player==1){
            if(document.getElementById(id).childElementCount<1){
                var b = document.createElement("img");
                b.src= "C:/Users/João Pedro/Documents/JavaScript/Exemplos JS/assets/Melon.png";
                document.getElementById(id).appendChild(b);
                cont++;
                var variavel = document.getElementById(id).id.replace('c','');
                espacosOcupados[variavel-1] = "1";
                setTimeout(function (){maquina()}, 200);
            }
        }
        
        if(player==2){
            if(document.getElementById(id).childElementCount<1){
                var b = document.createElement("img");
                b.src= "C:/Users/João Pedro/Documents/JavaScript/Exemplos JS/assets/Pumpkin.png";
                document.getElementById(id).appendChild(b);
                
                cont++;
                var variavel = document.getElementById(id).id.replace('c','');
                espacosOcupados[variavel-1] = "2";
                setTimeout(function (){maquina()}, 200);
            }
        }
    }
    
}



function sorteio(){
    if(Math.floor(Math.random() * 100+1)<=50){
        player = 1;
        var texto = document.createTextNode("Você é a Haley");
        document.getElementById("titulo").append(texto);
    }else{
        player = 2;
        var texto = document.createTextNode("Você é a Abigail");
        document.getElementById("titulo").append(texto);
        maquina();
    }
}