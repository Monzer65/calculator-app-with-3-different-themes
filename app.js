//Colculator themes
const switchThemeBtn = document.querySelector('.inner-switch')
let themes = [1, 2, 3];
let clickIndex = 0;
switchThemeBtn.addEventListener('click', function(){
    clickIndex += 1
    if(clickIndex > themes.length -1){
        clickIndex = 0;
    }
    //or:
    // let x = themes[clickIndex]
    // clickIndex = (clickIndex + 1) % themes.length
    if(clickIndex == 1){
        document.body.classList.add('theme2')
    }else if(clickIndex == 2){
        document.body.classList.remove('theme2')
        document.body.classList.add('theme3')
    }else{
        document.body.classList.remove('theme3')
    }
});

// Calculator computations
const display = document.querySelector('.screen');
const allKeys = Array.from(document.querySelectorAll('.key'));

allKeys.map(btn =>{
    btn.addEventListener('click', function (e){
        let firstCharacterOfDisplay = display.innerHTML.slice(0, 1);
        let lastCharacterOfDisplay = display.innerHTML.slice(-1);
        let replaceLastCharacter = () =>{
            display.innerHTML = display.innerHTML.replace(lastCharacterOfDisplay, '');
        };

        switch (e.target.innerHTML) {             
            case 'RESET':
                display.innerHTML = "0";
            break;

            case 'DEL':
                if(display.innerHTML === '0' || display.innerHTML.length <= 1){
                   return display.innerHTML = '0';
                };
                display.innerHTML = display.innerHTML.slice(0, -1)
            break;

           case '+':
               compute();
                if(display.innerHTML.includes('+')){
                    return;
                };
                if(lastCharacterOfDisplay === '-' || lastCharacterOfDisplay === 'x' || lastCharacterOfDisplay === '/'){
                    replaceLastCharacter();
                };
                if(display.innerHTML.includes('-') || display.innerHTML.includes('x') || display.innerHTML.includes('/')){
                    compute();
                    update();
                }else{
                    update();
                };
            break;
                
            case '-':
                // let countminus = display.innerHTML.split("-").length - 1;
                // let firstChar = display.innerHTML.charAt(0)
                // if(firstChar == '-' && countminus == 2){
                //     compute();
                //     return;
                // };
                // if(countminus == 1 && firstChar != '-'){
                //     compute();
                //     return;
                // };
                compute();
                if(display.innerHTML.includes('-')){
                    return;
                };
                if(lastCharacterOfDisplay === '+' || lastCharacterOfDisplay === 'x' || lastCharacterOfDisplay === '/'){
                    replaceLastCharacter();
                };
                if(display.innerHTML.includes('+') || display.innerHTML.includes('x') || display.innerHTML.includes('x')){
                    compute();
                    update();
                }else{
                    update();
                };
            break;

            case 'x':
                compute();
                if(display.innerHTML.includes('x')){
                    return;
                };
                if(lastCharacterOfDisplay === '+' || lastCharacterOfDisplay === '-' || lastCharacterOfDisplay === '/'){
                    replaceLastCharacter();
                };
                if(display.innerHTML.includes('+') || display.innerHTML.includes('-') || display.innerHTML.includes('/')){
                    compute();
                    update();
                }else{
                    update();
                };
            break;

            case '/':
                compute();
                if(display.innerHTML.includes('/')){
                    return;
                 };
                 if(lastCharacterOfDisplay === '+' || lastCharacterOfDisplay === '-' || lastCharacterOfDisplay === 'x'){
                    compute();
                    replaceLastCharacter();
                };
                if(display.innerHTML.includes('+') || display.innerHTML.includes('-') || display.innerHTML.includes('x')){
                    compute();
                    update();
                }else{
                    update();
                };
            break;

            case '=':
                compute();
            break;

            case '.':
                if(display.innerHTML.includes('.') && lastCharacterOfDisplay === "+" || lastCharacterOfDisplay === "-" || lastCharacterOfDisplay === "x" || lastCharacterOfDisplay === "/"){
                    display.innerHTML += '0';
                }else if(display.innerHTML.includes('.')){
                    return;
                };

            default:
                update();
                function update(){
                    if(display.innerHTML ==='0'){
                        display.innerHTML = e.target.innerHTML;
                        if(display.innerHTML === '.'){
                            display.innerHTML = '0' + '.';
                        };
                    }else if(firstCharacterOfDisplay === '+' ||  firstCharacterOfDisplay === 'x' || firstCharacterOfDisplay ==="/"){
                        return;
                    }else{
                        display.innerHTML += e.target.innerHTML;
                    };
                };
            break;
        };
    });
});

function compute(){
    let result;
    let displayValue = display.innerHTML;
    function splitTheDisplay (displayValue, operator) {
        const splitedDisplay = displayValue.split(operator);
        const afterOperator = splitedDisplay.pop();
        const beforeOperator = splitedDisplay.join(operator); 
        return [beforeOperator, afterOperator];
    };
    if(displayValue.includes('+')){
        const [beforeOperator, afterOperator] = splitTheDisplay(displayValue, '+');
        result = parseFloat(beforeOperator) + parseFloat(afterOperator);
    }else if(displayValue.includes('-')){
        const [beforeOperator, afterOperator] = splitTheDisplay(displayValue, '-');
        result = parseFloat(beforeOperator) - parseFloat(afterOperator);
    }else if(displayValue.includes('x')){
        const [beforeOperator, afterOperator] = splitTheDisplay(displayValue, 'x');
        result = parseFloat(beforeOperator) * parseFloat(afterOperator);
    }else if(displayValue.includes('/')){
        const [beforeOperator, afterOperator] = splitTheDisplay(displayValue, '/');
        result = parseFloat(beforeOperator) / parseFloat(afterOperator);
    };
    if(isNaN(result)){
        return;
    };
    display.innerHTML = result; 
};