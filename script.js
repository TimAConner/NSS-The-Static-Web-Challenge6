
function getNaturalNumbers(amount){
    let naturalNumbers = [];
    for(let i = 1; i <= amount; i++){
        naturalNumbers.push(i);
    }
    return naturalNumbers;
}

function calculateSumSquares(numbers){
    let squares = 0;
    for(let i = 0; i < numbers.length; i++){
        squares += (numbers[i]*numbers[i]);
    }
    return squares;
}

function calculateSquareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    let squareOfSum = (sum * sum);
    return squareOfSum;
}

let output = "";
output += "<p>The difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers: ";
output +=  ((calculateSquareSum(getNaturalNumbers(10))) - (calculateSumSquares(getNaturalNumbers(10))));
output += "</p>";
document.getElementById("output").innerHTML = output;