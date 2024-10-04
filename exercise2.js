
// ARJUNA ADLINA MARTHA
function threeStepsAB(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}

console.log(threeStepsAB('lane borrowed'))
console.log(threeStepsAB('i am a sick'))
console.log(threeStepsAB('you are boring'))
console.log(threeStepsAB('barbarian'))
console.log(threeStepsAB('bacon and meat'))