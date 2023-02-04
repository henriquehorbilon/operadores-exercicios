const num1 = Number(prompt('Insira o primeiro número:'))
const num2 = Number(prompt('Insira o segundo número:'))

const calc1 = num1 > num2
const calc2 = num1 === num2

const calc3 = ((num1 % num2)===0) 
const calc4 = ((num2 % num1)===0)

console.log(`O primeiro número é maior que o segundo?: ${calc1}`)
console.log(`O primeiro número é igual ao segundo?: ${calc2}`)
console.log(`O primeiro número é divisível pelo segundo?: ${calc3}`) 
console.log(`O segundo número é divisível pelo primeiro?: ${calc4}`) 


5
