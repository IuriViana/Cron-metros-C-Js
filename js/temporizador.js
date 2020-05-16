var Button = document.getElementById('definir');
var entrada = document.getElementById('dados');
var res = document.getElementById('Text');



document.getElementById('definir').addEventListener('click', function clicar(){

    if(Button.value == "Definir"){
        Button.value = "Iniciar"
        entrada.style.display = "block";

    }
    else if(Button.value == "Iniciar"){
        entrada.style.display = "none"
        Button.value = "Pausar"
    
        var h = Number(document.getElementById('Hora').value);
        var min = Number(document.getElementById('Min').value);
        var s = Number(document.getElementById('Secon').value);

        function cro(){

            if(Button.value == "Pausar"){
        
        
        
            if(s==0&&min==0&&h==0){
                Button.value = "Definir";
            }
            else if(s==0&&min==0&&h!=0){
            h--
            min=59;
            s=60;
            }
            else if(s==0){
                min--
                s=60
            }
        
                if(h<10&&min<10&&s<10){
                    res.innerHTML = "0"+h+":"+"0"+min+":"+"0"+s;
                }
                else if(h<10&&min<10){
                    res.innerHTML = "0"+h+":"+"0"+min+":"+s;
                }
                else if(h<10&&s<10){
                    res.innerHTML = "0"+h+":"+min+":"+"0"+s;
                }
                else if(h<10){
                    res.innerHTML = "0"+h+":"+min+":"+s;
                }
                else if(min<10&&s<10){
                    res.innerHTML = h+":"+"0"+min+":"+"0"+s;
                }
                else if(min<10){
                    res.innerHTML = h+":"+"0"+min+":"+s;
                }
                else if(s<10){
                    res.innerHTML = h+":"+min+":"+"0"+s;
                }
                else{
                    res.innerHTML = h+":"+min+":"+"0"+s;
                }
        
                
            }
                
        }
        setInterval(cro,1000);
    }
    else if(Button.value == "Pausar"){
        Button.value = "Iniciar"
    }
});

document.getElementById('zerar').addEventListener('click', function zerar(){
Button.value = "Definir";
entrada.style.display = "none";

res.innerText = "00:00:00"
h = 0;
min = 0;
s = 0;

});



