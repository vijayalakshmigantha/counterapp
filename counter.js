let counterEl = document.getElementById("counterEl");
let counterValue = counterEl.textContent;

function onDecrease(){
    let previousCounterValue = counterEl.textContent;
    let updatedValue=parseInt(previousCounterValue)-1
    if (updatedValue>0){
        counterEl.style.color="green";
    }
    else if(updatedValue<0){
        counterEl.style.color="red";

    }
    else{
        counterEl.style.color="black";
    }
    counterEl.textContent = updatedValue;
}

function onReset(){
    counterEl.textContent = 0;
    counterEl.style.color="black";
    
}

function onIncrease(){
    let previousCounterValue = counterEl.textContent;
    let updatedValue=parseInt(previousCounterValue)+1
    if (updatedValue>0){
        counterEl.style.color="green";
    }
    else if(updatedValue<0){
        counterEl.style.color="red";

    }
    else{
        counterEl.style.color="black";
    }
    counterEl.textContent = updatedValue;
    
}