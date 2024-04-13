const convertBtn = document.querySelector(".btn");
const inputvalue = document.getElementById("inputofRoman");
const outputValue = document.querySelector(".output");

outputValue.style.display = "none"


convertBtn.addEventListener("click", () => {
    const romanValue = inputvalue.value.toUpperCase()
    console.log("clicked");


    if (!romanValue.trim()) {
        outputValue.textContent = "Please enter a Roman Value.";
        outputValue.style.display = "block";
        return;
    }



    if (checkValidation(romanValue)) {
        const numberValue = convertRomanFunction(romanValue)
        outputValue.textContent = `Output: ${numberValue}`
        outputValue.style.display = "block"
    } else {
        outputValue.textContent = "Invalid Roman input.";
        outputValue.style.display = "block";
    }

})

function checkValidation(romanValue) {
    const validroman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (let i = 0; i < romanValue.length; i++) {
        if (!validroman.includes(romanValue[i])) {
            return false;
        }
    }
    const romanrepetation = /(IIII|VV|XXXX|LL|CCCC|DD|MMMM)/;
    if (romanrepetation.test(romanValue)) {
        return false;
    }
    const subtractiontest = /(IV|IX|XL|XC|CD|CM)/;
    if (subtractiontest.test(romanValue)) {
        return true;
    }
    const consecutiveTest = /(VV|LL|DD)/;
    if (consecutiveTest.test(romanValue)) {
        return false;
    }
    return true;
}

function convertRomanFunction(valueofRoman) {
    const romanInteger = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let realOutput = 0
    let preOutput = 0

    for (let i = valueofRoman.length - 1; i >= 0; i--) {
        const presentValue = romanInteger[valueofRoman[i]]
        if (presentValue < preOutput) {
            realOutput -= presentValue
        } else {
            realOutput += presentValue
        }
        preOutput = presentValue
    }

    return realOutput


}