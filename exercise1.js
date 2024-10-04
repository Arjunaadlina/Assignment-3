
// ARJUNA ADLINA MARTHA

function isArithmeticProgression(arr) {
    const diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) {
            return false;
        }
    }

    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5]))
console.log(isArithmeticProgression([2, 4, 6, 12]))
console.log(isArithmeticProgression([2, 4, 6, 8]))
console.log(isArithmeticProgression([2, 6, 18, 54]))
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]))