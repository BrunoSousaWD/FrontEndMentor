let val = document.getElementById('bill-total');
let tipAmount = document.getElementById('tip-result');
let totalPerson = document.getElementById('ppl-result');
let tipPercent = document.querySelectorAll('.tip-p');


document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength)
            input.value = input.value.slice(0, input.maxLength);
    };
});

// grab value from bill
// grab the value from tip
// grab the number of ppl
// display results
//reset button

for (let i = 0; i < tipPercent.length; i++) {
    tipPercent[i].addEventListener('click', () => {
        let y = parseInt(tipPercent[i].value) / 100;
        let k = y * val.value;
        console.log(k);
        tipAmount.textContent = '$' + k;
    })
}

