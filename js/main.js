let total = 0;

let output = document.getElementById('result');
let input1 = document.getElementById('num1');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');

document.body.addEventListener('click', function(event) {
    console.log(event.target.tagName)
    if(event.target.tagName !== 'BUTTON'){
        return
    } else if(event.target.textContent === '+') {
        total += parseFloat(input1.value);
    } else if(event.target.textContent === '-') {
        total -= parseFloat(input1.value);
    }
    render();
    // input1.value = 1;
})












function render() {
    output.textContent = total;
    if(total < 0) {
        output.style.color = 'red';
    } else output.style.color = 'black';
};
function init() {
    input1.value = 1;
    render();
};
init();