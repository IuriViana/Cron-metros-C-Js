var button = document.getElementById('Iniciar');
var zerar = document.getElementById('Zerar');
var res = document.querySelector('.res');
var h = 0;
var min = 0;
var s = 0;

function Inicio(){
    if(button.value == "Iniciar"){
    button.value = "Pausar"
    
    }
    else if(button.value == "Pausar"){
        button.value = "Iniciar"
        
    }

}

function cro(){
  
    if(button.value == "Pausar"){
       s++

     
       if(s<10){
           s = "0"+s;
       }
       
     
      
   
       if(s==60){
        min++
        s=0
    }
    if(min==60){
        h++;
        min=0;
    }
    if(h==24){
        h=0
    }


    if(h<10 && min<10){
    res.innerHTML ="0"+ h + ":" + "0" + min + ":" + s; 
    }
    else if(h<10){
    res.innerHTML ="0"+ h + ":"  + min + ":" + s; 
    }
    else if(min<10){
        res.innerHTML = h + ":"  +"0"+ min + ":" + s; 
    }
    else{
        res.innerHTML = h + ":"  + min + ":" + s; 
    }
       
    }
}
setInterval(cro,1000);

function Zerar(){
    s = 0;
    h= 0;
    min = 0;

    button.value = "Iniciar";
    res.innerHTML = "0"+ h + ":" +"0" + min + ":"+ "0" + s; 
}

