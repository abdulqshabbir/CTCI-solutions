export function isSubstring(wordA: string, wordB: string) {
    const longer = wordA.length > wordB.length ? wordA : wordB
    const shorter = wordA.length > wordB.length ? wordB : wordA

    let i = 0 // index of shorter
    let j = 0 // index of longer
    let consecutiveMatches = 0

    while (i < shorter.length && j < longer.length) {
        if (shorter[i] === longer[j]) {
            i++
            j++
            consecutiveMatches++
            if (consecutiveMatches === shorter.length) {
                return true
            }
        } else {
            j++
            consecutiveMatches = 0
        }
    }
    return false
}

/*
    String Rotation:Assume you have a method isSubstring which
    checks if one word is a substring of another. Given two strings,
    sl and s2, write code to check if s2 is a rotation of sl using
    only one call to isSubstring (e.g.,"waterbottle" is a rotation of "erbottlewat").
*/

export function isStringRotation(s1: string, s2: string) {
    // compare lengths
    if (s1.length !== s2.length) return false

    // double s2 and check if s2Repeated is a substring of s1
    const s2Repeated = s2 + s2
    if (isSubstring(s1, s2Repeated)) return true

    return false
}