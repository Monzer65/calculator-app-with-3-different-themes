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

// calculaor
const calcScreen = document.querySelector('.screen');
const keyPad = document.querySelector('.key-pad');
const allKeys = document.querySelectorAll('.key')
const nums = document.querySelectorAll('.num');
const deleteBtn = document.querySelector('.del');
const resetBtn = document.querySelector('.reset');
const equalsBtn = document.querySelector('.equals');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const timesBtn = document.querySelector('.times');
const devideBtn = document.querySelector('.division');
const decimalBtn = document.querySelector('.decimal');
const operators = document.querySelectorAll('.operator')

const Obj = {
    screenValue: '',
    firstValue: null,
    operator: null,
    secondValue: false
}
function updateScreen(){
    calcScreen.value = Obj.screenValue;
}

nums.forEach(key =>{
    key.addEventListener('click', function xx(e){
        const {screenValue} = Obj;
        Obj.screenValue = screenValue === '' ? e.target.innerHTML : screenValue + e.target.innerHTML
        if (Obj.screenValue.includes(decimalBtn.innerHTML)) {
            updateScreen(e.target.innerHTML)
            decimalBtn.removeEventListener('click', xx)
        }
    updateScreen(e.target.innerHTML)
    })
})

operators.forEach(key =>{
    key.addEventListener('click', function(e){
        if(Obj.screenValue == ""){
            return
        }
        switch (key) {
            case value: "+"
            let result = parsFloat(Obj.firstValue) + parsFloat(Obj.secondValue)
                break;
            case value:"-"
            result = parsFloat(Obj.firstValue) - parsFloat(Obj.secondValue)
                break;
                case value:"x"
            result = parsFloat(Obj.firstValue) * parsFloat(Obj.secondValue)
                break;
                case value:"/"
            result = parsFloat(Obj.firstValue) / parsFloat(Obj.secondValue)
                break;
            default:
                break;
        }
        Obj.firstValue = Obj.screenValue;
        console.log(Obj.firstValue)
    })
});

equalsBtn.addEventListener('click', function(){
    Obj.secondValue = Obj.screenValue;
    
})
resetBtn.addEventListener('click', ()=>{
    calcScreen.value = "0"
    Obj.screenValue = ''
});
