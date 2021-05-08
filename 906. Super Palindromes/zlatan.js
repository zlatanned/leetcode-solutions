/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
 let superpalindromesInRange = function(L, R) {
    
	// My idea was to take the root of L and R and then generate all palindromes between those numbers,
	// and then put those palindromes to power 2 and check if those are palindrome as well.
	
	// The generation of palindromes is done like this:
	// Lets say i want all palindromes of length 4, then i take all numbers of length 2.
	// I reverse the length 2 numbers and concatenate them with themselves. 
	// So "19" becomes "19" + "91". For odd length I do the same,
	//	but put a for loop around them that puts nrs 0 - 9 inside them. 
	// So "19" + "0" + "91", then "19" + "1" + "91", etc.
	
	// Next I loop through the generated palindromes and just check whether they are
	// inside sqrt(L) and sqrt(R). (sqrt(L) < palin < sqrt(R))
		// For every palin within sqrt(L) and sqrt(R), i put the palin to power 2
		// (with BigInt!) and then check if that is a palindrome. If so, then count++;
	
	let sqL = Math.sqrt(L);
	let sqR = Math.sqrt(R);
	let sqR_Length = parseInt(sqR).toString(10).length;
	let palins = 0; // counting the valid super-palindromes
	if (isPalindrome(L) && sqL == parseInt(sqL) && isPalindrome(sqL.toString(10))) palins++; // L is a superpalindrome
	if (isPalindrome(R) && sqR == parseInt(sqR) && isPalindrome(sqR.toString(10))) palins++; // R is a superpalindrome

	let end = (sqR == parseInt(sqR)) ? parseInt(sqR)-1 : parseInt(Math.floor(sqR));
	let begin = (sqL == parseInt(sqL)) ? parseInt(sqL)+1 : parseInt(Math.ceil(sqL));
	
	// account for superpalins with for single digit 'sub-palins'
	if (begin <= 1 && end >= 1) palins++; // 1
	if (begin <= 2 && end >= 2) palins++; // 4
	if (begin <= 3 && end >= 3) palins++; // 9
	let length = sqR_Length;
	let even = (length % 2 === 0);
	let half = Math.floor(length/2);
	let pow10Half = Math.pow(10, half); // 10 or 100 or 1000, etc
	let pow10HalfMinOne = Math.pow(10, half-1);
	let pal = ''; // init
	let palinStr = ''; // init
	let palin = -1; // init
	for (let i=1, leni=pow10Half; i < leni; i++) {
		pal = i.toString(10);
		pal.padStart(half-pal.length, '0');
		palReverse = reverseStr(pal);
		// palinsArr.push(pal + palReverse);
		palinStr = pal + palReverse; // generate even length palindrome
		palin = parseInt(palinStr);
		if (palin >= begin && palin <= end) {
			if (isPalindromeInt(BigInt(palin)*BigInt(palin))) {
				palins++;
			}
		}
		
		if (even && i >= pow10HalfMinOne) { // If I generate all palindromes up until some even length, lets say 4, then last step is to do length 2 + length 2 (19 + 91), and not the 19 + 0 + 91 step that generates odd length palindromes.
			continue;
		}
		for (let j=0, lenj=10; j < lenj; j++) {
			// palinsArr.push(pal + j + palReverse);
			palinStr = pal + j + palReverse; // generate odd length palindrome
			palin = parseInt(palinStr);
			if (palin >= begin && palin <= end) {
				if (isPalindromeInt(BigInt(palin)*BigInt(palin))) {
					palins++;
				}
			}
		}
	}
	return palins;
};

let reverseStr = function (str) {
	// nr = nr.toString(10);
	return str.split('').reverse().join('');
}

let isPalindromeInt = function (nr) {
	nr = nr.toString(10);
	return nr === nr.split('').reverse().join('');
}
let isPalindrome = function (nr) {
	return nr === nr.split('').reverse().join('');
}

console.log(superpalindromesInRange("4", "1000"));