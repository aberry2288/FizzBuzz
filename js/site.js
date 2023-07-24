// Get the numbers from our form inputs & passing values to other functions
// ENTRY POINT
// Controller Function
function getValues() {

    let fizzNumber = document.getElementById('startValue').value;
    let buzzNumber = document.getElementById('endValue').value;
    let stopNumber = document.getElementById('stopValue').value;

    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);
    stopNumber = Number(stopNumber);

    //Validating inputs from page
    if (isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(stopNumber) == true) {

        Swal.fire({
            title: 'Oops!',
            text: 'FizzBuzz only works with real numbers.',
            icon: 'error',
            backdrop: false
        });


    } else {

        let fbArray = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber);

        displayFizzBuzz(fbArray);
    }




}

// Busniess Logic - Creates an array of values according to the fizzbuzz rules
// Data Model
function generateFizzBuzz(fizzValue, buzzValue, max) {

    //Check every number from 1 to "max"
    //for each number, check if it is divisible by fizzValue
    //check if it is divisible by buzzValue
    //check if it is divisible by both
    //then put the right value into the array
    //then return that array

    let fbArray = [];


    for (let number = 1; number <= max; number = number + 1) {
        
        if (number % fizzValue == 0 && number % buzzValue == 0) {

            fbArray.push('FizzBuzz');

        } else if (number % buzzValue == 0) {

            fbArray.push('Buzz');

        } else if (number % fizzValue == 0) {

            fbArray.push('Fizz');
        
        } else {

            fbArray.push(number);
        }        

    }

    return fbArray;


}

// Puts the numbers on the page
// View Function
function displayFizzBuzz(fbArray) {

    let tableHtml = ''; // <tr><td>1</td></tr><tr><td>2</td></tr>

    for (let i = 0; i < fbArray.length; i = i + 1) {
        
        let value = fbArray[i];

        let html = `<div class="${value}">${value}</div>`;

        tableHtml = tableHtml + html;
    }

    let tableOnThePage = document.getElementById('results');
    
    tableOnThePage.innerHTML = tableHtml;
}



