let val = document.getElementById('bill-total');
let tipAmount = document.getElementById('tip-result');
let tipPercent = document.querySelectorAll('.tip-p');
let custom = document.getElementById('custom');
let numPeople = document.getElementById('numPeople');
let totalPerson = document.getElementById('ppl-result');
let reset = document.getElementById('reset');


//set max num length
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength)
            input.value = input.value.slice(0, input.maxLength);
    };
});


//grab bill amount * tip percent 
for (let i = 0; i < tipPercent.length; i++) {
    tipPercent[i].addEventListener('click', () => {
        let y = parseInt(tipPercent[i].value) / 100;
        let k = y * val.value;
        let p = k / parseInt(numPeople.value);
        console.log(k);
        tipAmount.textContent = '$' + k.toFixed(2);
        totalPerson.textContent = '$' + p.toFixed(2);
    })
}


// bill amount * custom amount 
custom.addEventListener('click', () => {
    let c = parseInt(custom.value) / 100;
    let u = c * val.value;
    let p = u / parseInt(numPeople.value);
    tipAmount.textContent = '$' + u.toFixed(2);
    totalPerson.textContent = '$' + p.toFixed(2);
})


//reset
reset.addEventListener('click', () => {
    totalPerson.textContent = '$' + '0.00';
    tipAmount.textContent = '$' + '0.00';
    val.value = '';
    numPeople.value = '';
    custom.value = '';
})
