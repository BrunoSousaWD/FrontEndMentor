var val = document.getElementById('bill-total');
var tipAmount = document.getElementById('tip-result');
var totalPerson = document.getElementById('ppl-result');

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

val.addEventListener('input', (e) => {
    tipAmount.textContent = '$' + e.target.value;
});
