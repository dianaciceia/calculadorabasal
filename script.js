const RESULTADO1 = document.getElementById("resultado1");
const RESULTADO2 = document.getElementById("resultado2");
const BUTON = document.getElementById("calcular");
const INPUT = document.getElementById("peso");
const ERROR = document.getElementById("error");

BUTON.addEventListener("click",()=>{
    let peso = INPUT.value;

        if(peso === ""){
           ERROR.style.display = "block";
        } else if (peso > 30){
            let sc = SuperficieCorporal(peso);
            RESULTADO1.innerHTML= sc[0] + " cc/h";
            RESULTADO1.style.display= "block";

            RESULTADO2.innerHTML= sc[1] + " cc/h";
            RESULTADO2.style.display= "block";
            ERROR.style.display= "none";
        } else {
            RESULTADO1.innerHTML= HollidaySegar(peso) + " cc/h";
            RESULTADO1.style.display= "block";
            ERROR.style.display= "none";
        }
});

function SuperficieCorporal(peso){
    let SuperficieCorporal = ((peso * 4) + 7) / (peso + 90);
    return [(SuperficieCorporal*1500).toFixed(2), (SuperficieCorporal*2000).toFixed(2)]
}

    
function HollidaySegar(peso){
    let resultado = 0;
    if(peso <= 10){
        resultado = (peso * 100) 
    } else if(peso >10 && peso <= 20) {
        resultado = (((peso - 10)*50) + 1000 )
    } else {
        resultado = (((peso - 20)*20) + 1500)
    } 
        return resultado
}