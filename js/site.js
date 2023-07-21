// Get the numbers from our form inputs 
// ENTRY POINT
// Controller Function
function getValues() {
    let fizzNumber = document.getElementById('startValue').value;
    let buzzNumber = document.getElementById('endValue').value;
    let stopNumber = document.getElementById('stopValue').value;

    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);
    stopNumber = Number(stopNumber);

    //making sure we have a number in field
    if (isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(stopNumber) == true) {

        Swal.fire({
            title: 'Oops!',
            text: 'FizzBuzz only works with real numbers.',
            icon: 'error',
            backdrop: false
        });


    } else {
        let numberArray = generateFizzBuzz(fizzNumber, buzzNumber);

        displayFizzBuzz(numberArray);
    }


}

// Busniess Logic - Creates every number in the input range
// Data Model
function generateFizzBuzz(start, end) {

    let range = [];

    for (let number = 1; number <= 100; number = number + 1) {

        if (number % 3 == 0 && number % 5 == 0) {
            number = 'FizzBuzz';
        } else if (number % 3 == 0) {
            number = 'Fizz';
        } else if (number % 5 == 0) {
            number = 'Buzz';
        } else if (number % 3 !== 0 && number % 5 !== 0) {
            number = number;
        }
        range.push(number);
    }

    return range; // [1, 2, 'Fizz', 4, 'Buzz']
}

// Puts the numbers on the page
// View Function
function displayFizzBuzz(fizzBuzzArray) {

    let tableHtml = ''; // <tr><td>1</td></tr><tr><td>2</td></tr>

    for (let i = 0; i < fizzBuzzArray.length; i = i + 1) {
        
        let value = fizzBuzzArray[i];

        let html = `<tr><td>${value}</td></tr>`;

        tableHtml = tableHtml + html;
    }

    let tableBodyOnThePage = document.getElementById('results');
    
    tableBodyOnThePage.innerHTML = tableHtml;
}



