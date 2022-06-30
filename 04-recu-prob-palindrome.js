// Check if the string is palindrome.
// read the same from forward or backward

function helper(str, start, end) {
	if (start >= end) return true;

	if (str[start] !== str[end]) return false;

	return helper(str, start + 1, end - 1);
}

function isPalindrome(str) {
	return helper(str, 0, str.length - 1);
}

console.log(isPalindrome('natan'));
