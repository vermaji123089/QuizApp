const mohit = document.querySelector(".mohit");
const rohit = document.querySelector(".rohit");
const aman = document.querySelector(".aman");
const rahul = document.querySelector(".rahul");
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
//q2///////////
const Ampere = document.querySelector(".Ampere");
const volt = document.querySelector(".volt");
const metre = document.querySelector(".metre");
const temp = document.querySelector(".temp");
//////q3/////////////
const a = document.querySelector(".A");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
//q4/////////////////
const voltmeter = document.querySelector(".voltmeter");
const Volt1 = document.querySelector(".Volt1");
const ohm1 = document.querySelector(".ohm1");
const metre1 = document.querySelector(".metre1");
//q5////////////////////////////
const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
const r3 = document.querySelector(".r3");
const r4 = document.querySelector(".r4");
//q6/////////////////////////////////////////
const el1 = document.querySelector(".el1");
const el2 = document.querySelector(".el2");
const el3 = document.querySelector(".el3");
const el4 = document.querySelector(".el4");
//q7////////////////////////////////////////////
const Electric = document.querySelector(".Electric");
const Cooling = document.querySelector(".Cooling");
const Heat = document.querySelector(".Heat");
const None = document.querySelector(".None");
//q8////////////////////////////////////////////
const tung1 = document.querySelector(".tung1");
const tung2 = document.querySelector(".tung2");
const tung3 = document.querySelector(".tung3");
const tung4 = document.querySelector(".tung4");
//q9////////////////////////////////////////////
const NitrogenD = document.querySelector(".NitrogenD");
const Nitrogen = document.querySelector(".Nitrogen");
const cool = document.querySelector(".cool");
const power = document.querySelector(".power");
//q10///////////////////////////////////////////
const ElectricC = document.querySelector(".ElectricC");
const Generator = document.querySelector(".Generator");
const Transformer = document.querySelector(".Transformer");
const Electroplating = document.querySelector(".Electroplating");

// const time=document.querySelector('.time');
const mark = result;
// time////////////////////////////////////////////////////////


// const time=document.querySelector('.time');
//  const btn=document.querySelector("#btn");
// let num=0;
// let countnum=()=>{
//     time.innerHTML="...loading"
//     setInterval(()=>{
//         time.innerHTML=`${num}`; 
// num++;

//     },1000)

// };

// btn.addEventListener("click",countnum);



// main logic//////////////////////////////////////////////////////////////
let num = 1;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        //    Qutioom1111111111111111111
        if (buttonText == 'Negative charge') {
            mohit.style.background = 'green';

            result.innerHTML = `${num++}`;

        } else if (buttonText == 'Potential difference') {
            rohit.style.background = 'red';
            mohit.style.background = 'green';
        } else if (buttonText == 'Potential') {

            rahul.style.background = 'red';
            mohit.style.background = 'green';
        } else if (buttonText == 'Direct current') {
            aman.style.background = 'red';
            mohit.style.background = 'green';
        }
        // Qiti111111111111111111111111111
        if (buttonText == 'Ampere') {
            volt.style.background = 'green';
            Ampere.style.background = 'red';
        } else if (buttonText == 'volt') {
            volt.style.background = 'green';

            result.innerHTML = `${num++}`;

          
        } else if (buttonText == 'metre') {
            metre.style.background = 'red';
            volt.style.background = 'green';
        } else if (buttonText == 'temp') {
            temp.style.background = 'red';
            volt.style.background = 'green';
        }
///////q3////////////////////////////////
if (buttonText == 'A. Volta') {
    
    a.style.background = 'green';
    result.innerHTML = `${num++}`;

} else if (buttonText == 'B. Volta') {
    a.style.background = 'green';
    b.style.background = 'red';

} else if (buttonText == 'C. Volta') {
    c.style.background = 'red';
    a.style.background = 'green';

} else if (buttonText == 'D. Volta') {
    d.style.background = 'red';
    a.style.background = 'green';
}
//q4/////////////////
if (buttonText == 'voltmeter') {
    voltmeter.style.background = 'red';
    ohm1.style.background = 'green';

} else if (buttonText == 'Volt') {
    ohm1.style.background = 'green';
    Volt1.style.background = 'red';

} else if (buttonText == 'ohm') {
   
    ohm1.style.background = 'green';
    result.innerHTML = `${num++}`;

} else if (buttonText == 'Metre') {
    metre1.style.background = 'red';
    ohm1.style.background = 'green';
}
//q5////////////////////////////

if (buttonText == 'R = R1+R2+R3') {
    r1.style.background = 'red';
    r4.style.background = 'green';

} else if (buttonText == '1/R = 1/R1+R2+R3') {
    r2.style.background = 'red';
    r4.style.background = 'green';

} else if (buttonText == '1/R=R = R1+R2+R3') {
    r3.style.background = 'red';
    r4.style.background = 'green';
  

} else if (buttonText == '1/R = 1/R1+1/R2+1/R3') {
    
    r4.style.background = 'green';
    result.innerHTML = `${num++}`;
}
//q6/////////////////////////////////////////////

if (buttonText == '2.6 x 10-19C') {
    el1.style.background = 'red';
    el4.style.background = 'green';

} else if (buttonText == '3.6 x 106C') {
    el4.style.background = 'green';
    el2.style.background = 'red';

} else if (buttonText == '1.6 x 1019C') {
    el3.style.background = 'red';
    el4.style.background = 'green';
  

} else if (buttonText == '1.6 x 10-19C') {
    
    el4.style.background = 'green';
    result.innerHTML = `${num++}`;
}
//q7////////////////////////////////////////////

if (buttonText == 'Electric') {
    Electric.style.background = 'red';
    Heat.style.background = 'green';

} else if (buttonText == 'Cooling') {
    Heat.style.background = 'green';
    Cooling.style.background = 'red';

} else if (buttonText == 'Heat') {
    Heat.style.background = 'green';
    result.innerHTML = `${num++}`;
  

} else if (buttonText == 'None of the above') {
    
    None.style.background = 'red';
    Heat.style.background = 'green';
    
}
//q8////////////////////////////////////////////

if (buttonText == '1380oC') {
    tung1.style.background = 'red';
    tung4.style.background = 'green';

} else if (buttonText == '1380oF') {
    tung4.style.background = 'green';
    tung2.style.background = 'red';

} else if (buttonText == '3380oF') {
    tung3.style.background = 'red';
    tung4.style.background = 'green';
  

} else if (buttonText == '3380oC') {
    
    tung4.style.background = 'green';
    result.innerHTML = `${num++}`;
}
//q9////////////////////////////////////////////
if (buttonText == 'Nitrogen difference') {
    NitrogenD.style.background = 'red';
    power.style.background = 'green';

} else if (buttonText == 'Nitrogen') {
    power.style.background = 'green';
    Nitrogen.style.background = 'red';

} else if (buttonText == 'cool') {
    cool.style.background = 'red';
    power.style.background = 'green';
  
} else if (buttonText == 'power') {

    power.style.background = 'green';
    result.innerHTML = `${num++}`;

}
//q10///////////////////////////////////////////

if (buttonText == 'Electric circuit') {
    ElectricC.style.background = 'red';
    Electroplating.style.background = 'green';

} else if (buttonText == 'Generator') {
    Electroplating.style.background = 'green';
    Generator.style.background = 'red';

} else if (buttonText == 'Transformer') {
    Transformer.style.background = 'red';
    Electroplating.style.background = 'green';
  
} else if (buttonText == 'Electroplating') {

    Electroplating.style.background = 'green';
    result.innerHTML = `${num++}`;

}
// console.log(buttonText)


    })
}


/*
 */




/////////////////////////toggle///////////of menu bar
let screen = document.getElementById("screen")
const menu_barO = document.querySelector(".open");
const menu_barC = document.querySelector('.close');
const ulshower = document.querySelector('.ul')
const main_menu = document.querySelector('.menubar');
let screenValue='';
const togglenavbar = () => {
    menu_barO.classList.toggle('open-active')
    menu_barC.classList.toggle('close-active')
    ulshower.classList.toggle('active-ul')
}
main_menu.addEventListener('click', () => togglenavbar());



for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        // screen.value+=buttonText;
        screenValue+=`${num++}`;
          screen.value=screenValue
        
    })
}
// 