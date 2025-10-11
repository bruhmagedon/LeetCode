// 1119. Remove Vowels from a String 🔒
// Description
// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

// Example 1:
// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:
// Input: s = "aeiou"
// Output: ""
 
// Constraints:
// 1 <= s.length <= 1000
// s consists of only lowercase English letters.


function removeVowels(str: string): string {
    // 1 ArrayFrom and Record / Map
    const vowels: Record<string,string> = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u',
    }
    return Array.from(str, (letter) => letter in vowels ? '' : letter).join('')
    
    // 2 ArrayFrom and Set / filter
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    return Array.from(str).filter((letter) => !vowels.has(letter)).join('')

    // 3 replace
    return str.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '')

     // 4 Regex and replace
    return str.replace(/[aeuio]/g, '')
}

console.log(removeVowels('leetcodeisacommunityforcoders'))