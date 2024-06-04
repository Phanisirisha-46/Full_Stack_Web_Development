const form = document.getElementById('calculator-form');
const h1 = document.querySelector('.result');
const firstInt = form.querySelector('input[name="first"]');
const secondInt = form.querySelector('input[name="second"]');
const btnAdd = document.getElementById('add');
const btnSubtract = document.getElementById('subtract');
const btnMultiply = document.getElementById('multiply');
const btnModulus = document.getElementById('modulus');
const btnDivide = document.getElementById('divide');

// Add click event listeners to each button
btnAdd.addEventListener('click', () => handleButtonClick('+'));
btnSubtract.addEventListener('click', () => handleButtonClick('-'));
btnMultiply.addEventListener('click', () => handleButtonClick('*'));
btnModulus.addEventListener('click', () => handleButtonClick('%'));
btnDivide.addEventListener('click', () => handleButtonClick('/'));

// Function to handle button clicks
function handleButtonClick(operation) {
    let v1 = Number(firstInt.value);
    let v2 = Number(secondInt.value);
    let answer;

    switch (operation) {
        case '+':
            answer = v1 + v2;
            break;
        case '-':
            answer = v1 - v2;
            break;
        case '*':
            answer = v1 * v2;
            break;
        case '%':
            answer = v1 % v2;
            break;
        case '/':
            answer = v1 / v2;
            break;
        default:
            answer = 'Invalid operation';
    }

    h1.textContent = answer;
}
