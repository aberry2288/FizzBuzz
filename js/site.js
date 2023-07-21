// Get the numbers from our form inputs 
// ENTRY POINT
// Controller Function
function getValues() {
    let startNumber = document.getElementById('startValue').value;
    let endNumber = document.getElementById('endValue').value;
    let stopNumber = document.getElementById('stopValue').value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);
    stopNumber = Number(stopNumber);

    //making sure we have a number in field
    if (isNaN(startNumber) == true || isNaN(endNumber) == true || isNaN(stopNumber) == true) {

        Swal.fire({
            title: 'Oops!',
            text: 'Hundo only works with real numbers.',
            icon: 'error',
            backdrop: false
        });

        //make sure end number is greater than start number
    } else if (startNumber > endNumber) {

        Swal.fire({
            title: 'Oops!',
            text: 'The starting number must be less than the ending number.',
            icon: 'error',
            backdrop: false
        });
        
    } else {
        let numberArray = generateNumbers(startNumber, endNumber, stopNumber);

        displayNumbers(numberArray);
    }


}

// Busniess Logic - Creates every number in the input range
// Data Model
function generateFizzBuzz(start, end) {

    let range = [];

    for (let number = start; number <= end; number = number + 1) {

        range.push(number);
    }

    return range;
}

// Puts the numbers on the page
// View Function
function displayFizzBuzz(numbersToDisplay) {

    let tableHtml = '';

    for (let index = 0; index < numbersToDisplay.length; index = index + 1) {

        let currentNumber = numbersToDisplay[index];

        let className = '';

        if (currentNumber % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }

        let tableRowHtml = `<tr><td class="${className}">${currentNumber}</td></tr>`;

        tableHtml = tableHtml + tableRowHtml;


    }

    document.getElementById('results').innerHTML = tableHtml;


}