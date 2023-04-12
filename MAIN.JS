let input = document.getElementById('inputBox');
// Variables defined with let can not be redeclared.
// You can not accidentally redeclare a variable declared with let

let buttons = document.querySelectorAll('button');
// selects all the buttons of input.

let string = "";
let arr = Array.from(buttons);
// from method() will make an array of ur buttons.
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
}) 