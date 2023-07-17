const buttons = document.querySelectorAll('.button');
const buttonSelected = document.getElementsByClassName('active');    
const reset = document.querySelector('.main__right .button-reset');
const inputs = document.querySelectorAll('.input');
const resultTip = document.querySelector('#result-tip');
const resultTotal = document.querySelector('#result-total .button__calculate');
const bill = document.querySelector('main .main__left .bill .input');
const numberOfPeople = document.querySelector('main .section__people .number__people .input');
const errorMessage = document.querySelector('.if-zero-number');



resultTotal.addEventListener('click', totalPerPerson )

resultTotal.addEventListener('mouseenter', ()=>{
    reset.style.backgroundColor = hsl(185, 41%, 84%);
});

resultTotal.addEventListener('mouseleave', ()=>{
    reset.style.backgroundColor = '';
});


buttons.forEach((button) => {
    button.addEventListener('click', calculateTip);
})


reset.addEventListener('click', resetAll)

reset.addEventListener('mouseenter', ()=>{
    reset.style.backgroundColor = hsl(185, 41%, 84%);
});

reset.addEventListener('mouseleave', ()=>{
    reset.style.backgroundColor = '';
});



bill.oninput = function(event){
    dealWithResetButton();

    if(customTip.value !== '' && (numberOfPeople.value !== '' || numberOfPeople.value > 0) ){
        calculate();
    }
    
}

customTip.oninput = function(){  
    dealWithResetButton();
    
    if((bill.value !== '' || bill.value < 0) && (numberOfPeople.value !== '' || numberOfPeople.value > 0) ){
        calculate();
    }
}

numberOfPeople.oninput = function(){
    
    dealWithResetButton();

    if(numberOfPeople.value <= 0 || numberOfPeople.value === ''){
        errorMessage.innerText = `can't be zero`;
        errorMessage.style.color = 'red';
        numberOfPeople.style.borderColor = 'red';
        resultTip.innerText = '----';
        resultTotal.innerText = '----';
    }else{
        errorMessage.innerText = ``;
        numberOfPeople.style.borderColor = '';
        calculate();
    }   
}

function calculate(){
    let tipPerPerson;
    let totalPerPerson;
    let tipPercentage;
    

    if(buttonSelected.length == 0){
        tipPercentage = 0;
    }else{
        if(customTip.classList.contains('active')){
            tipPercentage = customTip.value;
        }else{
            tipPercentage = buttonSelected[0].value;
        }    
    }
    
    tipPerPerson = (bill.value * tipPercentage * 0.01)/numberOfPeople.value;
    totalPerPerson = (bill.value/numberOfPeople.value) + tipPerPerson;
    tipPerPerson = tipPerPerson.toFixed(2);   
    totalPerPerson = totalPerPerson.toFixed(2);
   

    resultTip.innerText = tipPerPerson;
    resultTotal.innerText = totalPerPerson;
}


function calculateTip(){
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    this.classList.add('active');
    customTip.classList.remove('active');
    calculate();
}



function dealWithResetButton(){
    if(customTip.value === '' && bill.value === '' && numberOfPeople.value === ''){
        reset.disabled = true;
        reset.classList.remove('has-reset-activated');
        numberOfPeople.style.borderColor = '';
    }else{
        reset.disabled = false;
        reset.classList.add('has-reset-activated');       
    }
}


function resetAll(){
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    inputs.forEach((input) => {
        input.value = '';
    });

    resultTip.innerText = '0.00';
    resultTotal.innerText = '0.00';

    reset.disabled = true;
    errorMessage.innerText = ``;
    numberOfPeople.style.borderColor = ''
    reset.classList.remove('has-reset-activated');
    reset.style.backgroundColor = '';
}
