const reverseString = (text) => text.split("").reduce((newText, char) => `${char}${newText}`, "")

console.log(reverseString('Hello world and coders'))
console.log(reverseString('John Doe'))
console.log(reverseString('I am a bookworm'))
console.log(reverseString('Coding is my hobby'))
console.log(reverseString('Super'))