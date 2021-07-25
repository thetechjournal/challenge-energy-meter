const meter = document.querySelector('#energy');
const buttons = document.querySelectorAll('.btn');
const water = document.querySelector('.water');
const waterFacts = document.querySelector('.water-facts')

for (const button of buttons) {
    button.addEventListener('click', guage)
}

function showGlass(count){
    let html = "";
    for (let i=0; i<count; i++){
        console.log(html);
        html = `${html}<img src="./images/water.png"></img>`
    }
    water.innerHTML = html;
}

function guage (e) {
    let btnTitle = e.target.innerHTML;
    if(btnTitle === 'Low (1-2 glass)'){
        meter.setAttribute("value", "1");
        showGlass(2);
        waterFacts.innerHTML = "It improves blood oxygen circulation."
  
    }

    if(btnTitle === 'Medium (3-5 glass)'){
        meter.setAttribute("value", "5");
        showGlass(5);
        waterFacts.innerHTML = "It regulates your body temperature."
    }

    if(btnTitle === 'Good (6-8 glass)'){
        meter.setAttribute("value", "10");
        showGlass(7);
        waterFacts.innerHTML = "It helps maximize physical performance."
    }

    

}
