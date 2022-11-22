function checkIfInteger(distance) {
    var a = parseInt(distance)
    console.log("a: ", a)
    if (a) {
        console.log("parseInt(distance) is an integer")
        inputIsInteger = true
    }
    return inputIsInteger
}

var inputIsInteger = false
console.log("input is an integer? ", checkIfInteger("yyy"))