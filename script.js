// User to enter some number text on the input field ✔
// Once they click the submit button then the program should check if the amount that has been entered is within the allowed deposit range
// If the amount is within the range, then the balance on the page should update to reflect the deposit
// If the amount is not within the range, then an error should be displayed on the page

// Range is: 20 - 5000

// function callStudent(name) {
//   if (name == "Flavian") {
//     return "Flavian has been summoned";
//   } else if (name == "Frank") {
//     return "Frank has been summoned";
//   } else if (name == "Joyce") {
//     return "Joyce has been summoned";
//   } else {
//     return null;
//   }
// }

// console.log(callStudent("Claire"));

let userInput = document.getElementById("amount").value;
let balanceElement = document.getElementById("balance");

const errorElement = document.getElementById("error");
const successElement = document.getElementById("success");

const success2Element = document.getElementById("success2");
const error2Element = document.getElementById("error2");

function clearMessages() {
	successElement.textContent = "";
	errorElement.textContent = "";
	success2Element.textContent = "";
	error2Element.textContent = "";
}

function depositing() {
	clearMessages();
	let min = 20;
	let max = 5000;
	userInput = document.getElementById("amount").value;
	console.log(userInput);
	console.log(typeof userInput);
	// let errorElement = document.getElementById("error");
	// let successElement = document.getElementById("success");
	console.log(errorElement.textContent);
	if (userInput < min) {
		successElement.textContent = "";
		errorElement.textContent =
			"Deposit amount is too little. It needs to be more than " + min;
		return;
	} else if (userInput > max) {
		successElement.textContent = "";
		errorElement.textContent =
			"Deposit amount is too much. It needs to be less than " + max;
		return;
	}

	console.log("The value of amount is: ", userInput);
	console.log("The type of amount is: ", typeof userInput);

	balanceElement = document.getElementById("balance");

	let balance = balanceElement.innerText;

	console.log("The type of balance is: ", typeof balance);

	balance = parseInt(balance);
	console.log("The type of balance is: ", typeof balance);

	userInput = parseInt(userInput);
	console.log("The type of amount is: ", typeof userInput);

	console.log("The current balance is: ", balance);

	let newBalance = balance + userInput;
	console.log("The new balance is: ", newBalance);

	balanceElement.innerText = newBalance;

	errorElement.textContent = "";
	successElement.textContent = "deposit was successful";
	userInput = document.getElementById("amount").value = "";
}

let submitButton = document.getElementById("deposit-btn");

submitButton.addEventListener("click", depositing);

// let errorParagragh = document.getElementById("error2");

// console.log(errorParagragh);

function withdrawing() {
	clearMessages();
	// let success2Element = document.getElementById("success2");
	// let error2Element = document.getElementById("error2");
	// success2Element.textContent = "";
	// error2Element.textContent = "";
	userInput = document.getElementById("amount").value;
	balanceElement = document.getElementById("balance");
	let balance = balanceElement.innerText;
	console.log("The type of balance is: ", typeof balance);

	balance = parseInt(balance);
	console.log("The type of balance is: ", typeof balance);
	let max = balance;
	let min = 50;
	if (userInput > balance) {
		success2Element.textContent = "";
		error2Element.textContent = "withdrawal amount exceeds balance: " + max;
		return;
	} else if (min > userInput) {
		success2Element.textContent = "";
		error2Element.textContent =
			"Withdrawal amount is less than minimum allowed withdrawal: " + min;
		return;
	}

	userInput = parseInt(userInput);
	console.log("The type of amount is: ", typeof userInput);

	console.log("The current balance is: ", balance);

	let newBalance = balance - userInput;
	console.log("The new balance is: ", newBalance);

	balanceElement.innerText = newBalance;

	error2Element.textContent = "";
	success2Element.textContent =
		"Withdrawal is successfull. New balance: " + newBalance;
	userInput = document.getElementById("amount").value = "";
}
let withdrawElement = document.getElementById("withdraw-btn");
withdrawElement.addEventListener("click", withdrawing);
