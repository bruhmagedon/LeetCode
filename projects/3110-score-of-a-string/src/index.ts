
// 3110. Score of a String
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s.

// Constraints:
// 2 <= s.length <= 100
// s consists only of lowercase English letters.

function scoreOfString(s: string) {
    let result = 0;
    for(let i = 0; i < s.length - 1; i++) {
         result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
    }
    return result;
 };