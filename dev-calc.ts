import * as readline from 'readline'

const MY_VALUE: number = 70.0
const HEALTH_INSURANCE_VALUE: number = 866.65
const MOODAR: number = 0

let cashHours: number
let cashMinutes: number
let debts: number

let totalCash: number

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Horas e Minutos: ', (answer) => {
  const workedTime = answer.split(':')

  cashHours = parseInt(workedTime[0]) * MY_VALUE
  cashMinutes = (parseInt(workedTime[1]) / 60) * MY_VALUE
  debts = HEALTH_INSURANCE_VALUE + MOODAR

  totalCash = cashHours + cashMinutes - debts

  const formatedCashValue = totalCash.toFixed(2)

  console.log(`Emita sua NF com o valor R$ ${formatedCashValue}`)

  rl.close()
})
