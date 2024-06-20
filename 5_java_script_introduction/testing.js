// Common ways of testing
//// run example
function concatStrings(strA, strB) {
    return strA + strB
}
concatStrings(1, 2)
//// add commments of expected results

// Jest test
function concatStrings(strA, strB) {
    return strA + strB
}
expect(concatStrings('ab', 'cd')).toBe("abcd")

// Types of testing
// // e2e testing
// // integration testing
// // unit testing

// Jest testing framework
// // code coverage
// // in-built Mocking functions
// // snapshot testing


