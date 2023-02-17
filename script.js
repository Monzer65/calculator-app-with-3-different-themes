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

// Calculations
const display = document.querySelector('.bigger-screen');
const smallDisplay = document.querySelector('.smaller-screen');
const secondVal = document.querySelector('.second-value')
const allKeys = Array.from(document.querySelectorAll('.key'));
let firstInput = null;
let secondInput = null;
let clicked =0;
allKeys.map(btn =>{
    btn.addEventListener('click', function (e){
        switch (e.target.innerHTML) {             
            case 'RESET':
                display.innerHTML = "0"
                smallDisplay.innerHTML = ""
                break;
            case 'DEL':
                if(display.innerHTML === '0' || display.innerHTML.length <= 1){
                   return display.innerHTML = '0'
                }
                display.innerHTML = display.innerHTML.slice(0, -1)
                break;
           case '+':
                smallDisplay.innerHTML = display.innerHTML + ' +'
                firstInput = parseFloat(smallDisplay.innerHTML)
                console.log(firstInput)
                display.innerHTML = 0
                // update()
                secondVal.innerHTML = display.innerHTML
                secondInput = parseFloat(secondVal.innerHTML)
                console.log(secondInput)
            //    firstInput = smallDisplay.innerHTML = display.innerHTML
            //    let xx = 0
            //    xx++
            //    if(xx > 0){
            //        display.innerHTML += e.target.innerHTML
            //        secondInput = parseFloat(display.innerHTML)
                //    smallDisplay.innerHTML += secondInput + ' ='
                //    if(isNaN(secondInput)){
                //        return
                //    }
                //    let results = parseFloat(firstInput) + secondInput

                    // display.innerHTML = results
                    // update()
                //     console.log(results)
                // }
                //  display.innerHTML = ''
                // secondInput = parseFloat(display.innerHTML)
                // let results = firstInput + secondInput
                // display.innerHTML = results  
                  
                break;
            // case '-':
            //     result()
            //     if(display.innerHTML.includes('-')){
            //         return
            //     }

            //     update()
            //     if(lastValue === '+' || lastValue === 'x' || lastValue === '/'){
            //         replaceVal()
            //     }
            //     break;
            // case 'x':
            //     result()
            //     if(display.innerHTML.includes('x')){
            //         return
            //      }
            //      update()
            //      if(lastValue === '+' || lastValue === '-' || lastValue === '/'){
            //         replaceVal()
            //     }
            //     break;
            // case '/':
            //     result()
            //     if(display.innerHTML.includes('/')){
            //         return
            //      }
            //      update()
            //      if(lastValue === '+' || lastValue === '-' || lastValue === 'x'){
            //         replaceVal()
            //     }
            //     break;
            // case '=':
            //     result()
            //     break;
            //     case '.':
            //         if(display.innerHTML.includes('.') && display.innerHTML.includes ('+') || display.innerHTML.includes ('-') || display.innerHTML.includes ('x') || display.innerHTML.includes ('/')){
            //             update()
            //         }else if(display.innerHTML.includes('.')){
            //             return
            //         }
            default:
                update()
                function update(){
                    if(display.innerHTML ==='0'){
                        display.innerHTML = e.target.innerHTML
                        if(display.innerHTML === '.'){
                            display.innerHTML = '0' + '.'
                        }
                    }else if(btn.classList.contains('operator')){
                        return
                    }
                    else{
                        display.innerHTML += e.target.innerHTML
                    }
                }
                break;
        }
    })
})

// function result(){
//     let result;
//     let screenVal = display.innerHTML
//     if(display.innerHTML.includes('+')){
//         let parts = screenVal.split('+', 2);
//         let previousVal = parts[0];
//         let nextVal = parts[1];
//         result = parseFloat(previousVal) + parseFloat(nextVal)
//         if(previousVal.includes('-')){
//             console.log('sa')
//         }
//     }else if(display.innerHTML.includes('-')){
//         let parts = screenVal.split('-', 2);
//         let previousVal = parts[0];
//         let nextVal = parts[1];
//         result = parseFloat(previousVal) - parseFloat(nextVal)
//     }else if(display.innerHTML.includes('x')){
//         let parts = screenVal.split('x', 2);
//         let previousVal = parts[0];
//         let nextVal = parts[1];
//         result = parseFloat(previousVal) * parseFloat(nextVal)
//     }else if(display.innerHTML.includes('/')){
//         let parts = screenVal.split('/', 2);
//         let previousVal = parts[0];
//         let nextVal = parts[1];
//         result = parseFloat(previousVal) / parseFloat(nextVal)
//     }
//     if(isNaN(result)){
//         return
//     }
//     display.innerHTML = result; 
// }