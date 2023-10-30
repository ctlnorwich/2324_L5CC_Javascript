let opening = "Once upon a time"
let adjectives = ["tirelessly", "slowly", "directly", "softly"] 
let verbs = ["ate ", "talked ", "walked ", "forgot ", "reminisced "]
let article = ["I ", "he ", "she ", "they ", "we "]


function randomStringFromArray(inputArray){
    let randomNumber = Math.floor(Math.random() * inputArray.length)
    
    Math.random() * inputArray.length
    return inputArray[randomNumber]
}


let output = opening + randomStringFromArray(article) + randomStringFromArray(verbs) + randomStringFromArray(adjectives)
console.log(output)