function countWays(n){
	// Base calculation
	if(n === 1 || n === 2) return n;

	return countWays(n - 1) + countWays(n - 2);
}

console.log(countWays(20))