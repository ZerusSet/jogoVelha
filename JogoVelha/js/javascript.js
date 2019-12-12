var player, cont=0;
var idsEspacos = ["c1","c2","c3","c4","c5","c6","c7","c8","c9"];


function mudaCor(i, id){
    if(i==1)
    document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.1)";
    if(i==0)
    document.getElementById(id).style.backgroundColor = "white";
}

function maquina(){
    if(cont>=9){
        return;
    }
    var x = (Math.floor(Math.random() * 10 - 1));
    console.log(x);
    if(x<0){
        maquina();
        return;
    }
    var id = idsEspacos[x];
    if(player==1){
        if(document.getElementById(id).childElementCount<1){
            var b = document.createElement("i");
            b.className = "fas fa-times";
            b.style.fontSize = "125px";
            document.getElementById(id).appendChild(b);
            var classe = document.getElementsByTagName("i");
            cont++;
        } else {
            maquina();
        }
    } else {
        if(document.getElementById(id).childElementCount<1){
            var b = document.createElement("i");
            b.className = "far fa-circle";
            b.style.fontSize = "100px";
            document.getElementById(id).appendChild(b);
            var classe = document.getElementsByTagName("i");
            cont++;
        } else {
            maquina();
        }
    }
}

function adiciona(id){
    if(cont>=9){
        return;
    }
    if(player==1){
        if(document.getElementById(id).childElementCount<1){
            var b = document.createElement("i");
            b.className = "far fa-circle";
            b.style.fontSize = "100px";
            document.getElementById(id).appendChild(b);
            var classe = document.getElementsByTagName("i");
            cont++;
            setTimeout(maquina(), 3000);
        }
    }
    
    if(player==2){
        if(document.getElementById(id).childElementCount<1){
            var b = document.createElement("i");
            b.className = "fas fa-times";
            b.style.fontSize = "125px";
            document.getElementById(id).appendChild(b);
            var classe = document.getElementsByTagName("i");
            cont++;
            setTimeout(maquina(), 3000);
        }
    }
}



function sorteio(){
    if(Math.floor(Math.random() * 100+1)<=50){
        player = 1;
    }else{
        player = 2;
    }
}