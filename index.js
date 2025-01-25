const display = document.getElementById("display");

function Display(input){
    display.value +=input;
}

function Clear(){
    display.value="";
}

function Delete(){
    if(isInt(display.value)===true|| isOperator(display.value)===true){
        display.value = display.value.substring(0, display.value.length - 1);
    }
}

function DisplayAns(){
}

function Calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}
function isOperator(value) {
    if(value.includes("+")||value.includes("-")||value.includes("*")||value.includes("/"))
    {
        return true;
    }
    else{
        return false
    }
}