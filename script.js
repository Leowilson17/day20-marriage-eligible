
console.log("Marriage Eligibility");
console.log("------*******------");
alert("Welcome to Marriage Eligible Tester");
alert("Choose the Number");
alert("1. Male , 2. Female ");
var chooseOption = parseInt(prompt(''));
var age = parseInt(prompt('Enter your Current Age'));
if (chooseOption == 1) {
    if (age >= 21) {
        console.log("Your  Eligible for Marriage ");
    }
    else if (age < 21) {
        var calculate = 21 - age;
        console.log('Waiting for ' + calculate + ' Year');
    }
}
if (chooseOption == 2) {
    if (age >= 18) {
        console.log("Your Eligible for Marriage");
    }
    else if (age < 18) {
        var female_age = 18 - age;
        console.log("Waiting for " + female_age + " Year");
    }
}


