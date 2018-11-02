/* first */
var num1 = 7
var num2 = 9

/* second */
var sum = add(num1, num2);
console.log(sum);
function add(num1, num2) {
    return num1 + num2;
}

/* third */
var difference = subtract(num1, num2);
console.log(difference);
function subtract(num1, num2) {
    return num1 - num2;
}

/* fourth */
var product = multiply(num1, num2);
console.log(product);
function multiply(num1, num2) {
    return num1 * num2;
}

/* fifth */
var quotient = divide(num1, num2);
console.log(quotient);
function divide(num1, num2) {
    return num1 / num2;
}

/* sixth */
var checkSum = checkSum(14, 15);
console.log(checkSum)
function checkSum(a, b) {
    return "Mariah Carey has been married " + (a + b) + " times.";
}

/* seventh */
var checkDifference = checkDifference(367, 13);
console.log(checkDifference)
function checkDifference(a, b) {
    return "Last night I dreamt that I ate " + (a + b) + " soft shell tacos.";
}

/* eigth */
var checkProduct = checkProduct(367, 13);
console.log(checkProduct)
function checkProduct(a, b) {
    return sum*product
}

/*ninth*/
var checkQuotient = checkQuotient(367, 13);
console.log(checkQuotient)
function checkQuotient(a, b) {
    return quotient*product
}


num3 = 4
num4 = 3
num5 = 8

/*tenth*/

var addThenSubtract = addThenSubtract(num3, num4, num5);
console.log(addThenSubtract)
function addThenSubtract(a, b, c) {
    return a + b - c
}

/*eleventh*/

var multiplyThenDivide = multiplyThenDivide(num3, num4, num5);
console.log(multiplyThenDivide)
function multiplyThenDivide(a, b, c) {
    return a * b / c
}

/*twelfth*/
var firstName = "Ben"
var lastName = "Dover"
var createFullName = createFullName(firstName, lastName);
console.log(createFullName);
function createFullName(a, b) {
    return a + " " + b;
}

/*thirteen*/
var food = "Curry"
var eatFood = eatFood(firstName, lastName, food);
console.log(eatFood);
function eatFood(a, b, c) {
    return a + " " + b + " " + "eats" + " " + c + " everyday for breakfast.";
}

/*fourteen*/
var inches = 8
var shoeSize = shoeSize(inches);
console.log(shoeSize);
function shoeSize(a) {
    return a * 2.54;
}

/*fifteen*/
function allCap(str){
     return str.toUpperCase(0) + str.slice(15)
}

console.log(allCap('yessuh blessuh'));

/*sixteen*/
function oneCap(str){
     return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(oneCap('yessuhs blessuhs'));

/*seventeen*/
 var person = verifyDrinkingAge(18)
function verifyDrinkingAge(a) {
    	if (18 >= 21) {
    		return "canDrink"
    	} else {
    		return "cannotDrink"
    	}
    }
console.log(person)

/*eighteen*/
var person = ThrowParty(18)
 function ThrowParty(a) {
 	if (18 >= 21) {
    return "Cheee Hoo! We going to da party!";
} else {
    return "Meh, see you at Starbucks.";
}
}

console.log(person)