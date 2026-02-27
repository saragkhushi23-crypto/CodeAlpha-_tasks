let display = document.getElementById('display');
function appendNumber(value) {
    display.value+=value;
}
function clearDisplay() {
     display.value ='';
}
function calculateResult(){
    try {
      display.value = eval(display.value);
    }catch(e){
        display.value = 'Error';
        
    }
}
document.addEventListener('keydown',function(event) {
    const key = event.key;
    if(!isNaN(key)||['+','-','*','/'].includes(key)){
    appendNumber(key);
    }else if (key==='Enter') {
        calculateResult();
    }else if(key ==='Escape'){
        clearDisplay();
    }
});