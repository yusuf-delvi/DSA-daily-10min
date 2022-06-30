// Problem: SUM 1 to n:
// N sum problem
function sum(n) {
	// 1. Base case
	if (n === 1) {
		return 1;
	}

	// 3. Recursive formula
	let recResult = sum(n - 1);

	// 2. Small calculation
	let result = n + recResult;

	return result;
}

// Problem: FACTORIAL SUM 1 to n:
// N factorial sum problem
function factorial(n) {
	// Base case
	if (n === 1) {
		return 1;
	}

	// Recursive formula
	// Small calc
	return n * factorial(n - 1);
}

console.log(sum(5)); // 15
console.log(factorial(5)); // 120

// Problem n(2)
function recursivePowerN(base, n) {
	// Base case
	if (n === 0) return 1;

	return base * recursivePowerN(base, n - 1);
}

console.log(recursivePowerN(2, 5)); //32
