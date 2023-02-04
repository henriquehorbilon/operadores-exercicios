


//parte 2

const salarioFixo = 2000
const auxCreche = 2 * 45.5
const salarioBenef = salarioFixo + auxCreche
console.log(`Salario fixo + auxílio é: ${salarioBenef}`)

const comissaoJan = 5784.5 * 0.1
console.log(`Comissão Janeiro: ${comissaoJan}`)

const descontoJan = (salarioFixo + comissaoJan) * 0.05
console.log(`Será descontado em Janeiro pelo INSS: ${descontoJan}`)

const finalJaneiro = (salarioFixo + auxCreche + comissaoJan ) - descontoJan
const finalJaneiroFixed = finalJaneiro.toFixed(2)
console.log(`Salario Final Janeiro: ${finalJaneiroFixed}`)

//Cálculo de todos os meses

//Fevereiro

const comissaoFev = 3418.41 * 0.1
const descontoFev = (salarioFixo + comissaoFev) * 0.05

const finalFevereiro = (salarioFixo + auxCreche + comissaoFev ) - descontoFev
const finalFevereiroFixed = finalFevereiro.toFixed(2)
console.log(`Salario Final Fevereiro: ${finalFevereiroFixed}`)

//Março

const comissaoMarco = 4124.1 * 0.1
const descontoMarco = (salarioFixo + comissaoMarco) * 0.05

const finalMarco = (salarioFixo + auxCreche + comissaoMarco ) - descontoMarco
const finalMarcoFixed = finalMarco.toFixed(2)
console.log(`Salario Final Marco: ${finalMarcoFixed}`)

//Abril

const comissaoAbril = 1874 * 0.1
const descontoAbril = (salarioFixo + comissaoAbril) * 0.05

const finalAbril = (salarioFixo + auxCreche + comissaoAbril ) - descontoAbril
const finalAbrilFixed = finalAbril.toFixed(2)
console.log(`Salario Final Abril: ${finalAbrilFixed}`)

//Maio

const comissaoMaio = 7000 * 0.1
const descontoMaio = (salarioFixo + comissaoMaio) * 0.05

const finalMaio = (salarioFixo + auxCreche + comissaoMaio ) - descontoMaio
const finalMaioFixed = finalMaio.toFixed(2)
console.log(`Salario Final Maio: ${finalMaioFixed}`)

//Junho

const comissaoJunho = 9450 * 0.1
const descontoJunho = (salarioFixo + comissaoJunho) * 0.05

const finalJunho = (salarioFixo + auxCreche + comissaoJunho ) - descontoJunho
const finalJunhoFixed = finalJunho.toFixed(2)
console.log(`Salario Final Junho: ${finalJunhoFixed}`)