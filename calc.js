//Themes
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

// calculations
const display = document.querySelector('.screen');
const allKeys = Array.from(document.querySelectorAll('.key'));
allKeys.map(btn =>{
    btn.addEventListener('click', function (e){
        let firstValue = display.innerHTML.slice(0, 1);
        let lastValue = display.innerHTML.slice(-1);
        let replaceVal = () =>{
            display.innerHTML = display.innerHTML.replace(lastValue, '')
        }
        switch (e.target.innerHTML) {             
            case 'RESET':
                display.innerHTML = "0"
                break;
            case 'DEL':
                if(display.innerHTML === '0' || display.innerHTML.length <= 1){
                   return display.innerHTML = '0'
                }
                display.innerHTML = display.innerHTML.slice(0, -1)
                break;
           case '+':
               if(display.innerHTML.includes('+')){
                    result()
                    return
                }
                if(lastValue === '-' || lastValue === 'x' || lastValue === '/'){
                    replaceVal()
                }
                if(display.innerHTML.includes('-') || display.innerHTML.includes('x') || display.innerHTML.includes('/')){
                    result()
                    update()
                }else{
                    update()
                }
                break;
            case '-':
                let countminus = display.innerHTML.split("-").length - 1;
                let firstChar = display.innerHTML.charAt(0)
                if(firstChar == '-' && countminus == 2){
                    result()
                    return
                }
                if(countminus == 1 && firstChar != '-'){
                    result()
                    return
                }
                if(lastValue === '+' || lastValue === 'x' || lastValue === '/'){
                    replaceVal()
                }
                if(display.innerHTML.includes('+') || display.innerHTML.includes('x') || display.innerHTML.includes('x')){
                    result()
                    update()
                }else{
                    update()
                }
                break;
            case 'x':
                result()
                if(display.innerHTML.includes('x')){
                    return
                 }
                 if(lastValue === '+' || lastValue === '-' || lastValue === '/'){
                    replaceVal()
                }
                if(display.innerHTML.includes('+') || display.innerHTML.includes('-') || display.innerHTML.includes('/')){
                    result()
                    update()
                }else{
                    update()
                }
                break;
            case '/':
                result()
                if(display.innerHTML.includes('/')){
                    return
                 }
                 if(lastValue === '+' || lastValue === '-' || lastValue === 'x'){
                    result()
                    replaceVal()
                }
                if(display.innerHTML.includes('+') || display.innerHTML.includes('-') || display.innerHTML.includes('x')){
                    result()
                    update()
                }else{
                    update()
                }
                break;
            case '=':
                result()
                break;
                case '.':
                    if(display.innerHTML.includes('.') && display.innerHTML.includes ('+') || display.innerHTML.includes ('-') || display.innerHTML.includes ('x') || display.innerHTML.includes ('/')){
                        update()
                    }else if(display.innerHTML.includes('.')){
                        return
                    }
            default:
                update()
                function update(){
                    if(display.innerHTML ==='0'){
                        display.innerHTML = e.target.innerHTML
                        if(display.innerHTML === '.'){
                            display.innerHTML = '0' + '.'
                        }
                    }else{
                        display.innerHTML += e.target.innerHTML
                    }
                    
                }
                break;
        }
    })
})

function result(){
    let result;
    let screenValue = display.innerHTML
    let firstValue = display.innerHTML.slice(0, 1)
    function splitTheDisplay (screenValue, operator) {
        const inputValue = screenValue.split(operator);
        const afterOperator = inputValue.pop();
        const beforeOperator = inputValue.join(operator); 
        return [beforeOperator, afterOperator];
    }
    if(screenValue.includes('+')){
        const [beforeOperator, afterOperator] = splitTheDisplay(screenValue, '+');
        result = parseFloat(beforeOperator) + parseFloat(afterOperator)
    }else if(screenValue.includes('-')){
        const [beforeOperator, afterOperator] = splitTheDisplay(screenValue, '-');
        result = parseFloat(beforeOperator) - parseFloat(afterOperator)
    }else if(screenValue.includes('x')){
        const [beforeOperator, afterOperator] = splitTheDisplay(screenValue, 'x');
        result = parseFloat(beforeOperator) * parseFloat(afterOperator)
    }else if(display.innerHTML.includes('/')){
        let parts = screenValue.split('/', 2);
        let previousVal = parts[0];
        let nextVal = parts[1];
        result = parseFloat(previousVal) / parseFloat(nextVal)
    }
    if(isNaN(result)){
        return
    }
    display.innerHTML = result; 
}