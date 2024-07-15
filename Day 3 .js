/*Day 3 : Control Structures
Tasks/ Activities:
Activity 1: If-Else Statements
-->Task 1: Write a program to check if a number is a positive , negative , or zero , and log the result to the console.
*/
const num = 0;
if (num > 0){
    console.log("The number is positive");
}
else if (num < 0){
    console.log("The number is negative");
}
else{
console.log("The number is zero");
}
/*-->Task 2: Write a program to check if a person is eligible tom vote (age>=18) and log the result to the console.*/
const age = 18;
if (age >= 18){
    console.log("The person is eligible to vote");
}
else{
    console.log("The person is not eligible to vote");
}
/* Activity 2: Nested If-Else Statements
-->Task 3: Write a program to find the largest of three numbers using nested if-else statemnets*/
const num1 = 10;
const num2 = 20;
const num3 = 3;
if (num1 > num2 ){
    if (num1 > num3){
        console.log("The largest number is " + num1);
        }
        else{
            console.log("The largest number is " + num3);
            }
            }
            else if (num2 > num3){
                console.log("The largest number is " + num2);
                }
                else{
                    console.log("The largest number is " + num3);
                    }
/* Activity 3: Switch Case
-->Task 4: Write a program that uses a switch case to determine the day of the week on a number(1-70and log the result to the console)*/
const day = 1;
switch (day) {
    case 1:
        console.log("The day is Monday");
        break;
    case 2:
            console.log("The day is Tuesday");
            break;
    case 3:
                console.log("The day is Wednesday");
                break;
    case 4:
                    console.log("The day is Thursday");
                    break;
    case 5:
                        console.log("The day is Friday");
                        break;
    case 6:
                            console.log("The day is Saturday");
                            break;
    case 7:
                                console.log("The day is Sunday");
                                break;
    break;
    default:
                                    console.log("The day is not valid");
    break;
}
/*Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F)based on a score and log the grade to the console*/
function assignGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    return grade;
}

const score = 50;
const grade = assignGrade(score);
console.log("The grade is " + grade);
/* Activity 4: Conditional Operator
-->Task 6: Write a program that uses the ternary operator to check if a number is een or odd and log the result to the console*/
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
    }
let number=20
console.log(isEvenOrOdd(number));
/* Activity 5: Combining Conditions
-->Task 7: Write a program to check if a year is a leap year using multiple conditions(divisible by 4,but not 100 unless also divisible by 400)and log the result to the console*/
function isLeapYear(year){
    return year % 4 === 0 && (year % 100 !== 0 || year)
}
let year=2024
console.log(isLeapYear(year));