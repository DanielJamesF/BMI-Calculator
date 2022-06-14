function calculator(){
    }
if(true) {
    }
let btnCalculate = document.getElementById("Calculator");
btnCalculate.addEventListener('click', ()=> {
    let age= document.querySelector("#Age").value;
    let height = document.querySelector("#Height").value;
    let weight = document.querySelector("#Weight").value;
    let BMI= Math.floor((weight/height**2)*10**5)/10;
    let range = '';
    if(age>=18){
        switch(true){
            case (BMI<16):
            range = 'Severe Thinness';
            break;
            case (BMI=>16 && BMI<=17):
            range = 'Moderate Thinness';
            break;
            case (BMI>=17 && BMI<=18.5):
            range = 'Mild Thinness';
            break;
            case (BMI>=18.5 && BMI<=25):
            range = "Normal";
            break;
            case (BMI>=25 && BMI<=30):
            range ="Overweight" ;
            break;
            case (BMI>=30 && BMI<=35):
            range= "Obese Class I";
            break;
            case (BMI>=35 && BMI<=40):
            range= "Obese Class II";
            break;
            case (BMI>40):
            range= "Obese Class III";
            break;
        }
    }
 document.querySelector("#Output").innerHTML=`${BMI} kg/m² ${range}`;
})