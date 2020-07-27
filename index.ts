enum enumTest {
  TESTE_A = 1,
  TESTE_B,
  TESTE_C,
  TESTE_D,
  TESTE_E,
}

const objArray: { name: string; type: number }[] = [
  { name: 'A', type: 2 },
  { name: 'B', type: 3 },
  { name: 'C', type: 4 },
  { name: 'D', type: 5 },
  { name: 'E', type: 6 },
  { name: 'F', type: 7 },
]

const filter = objArray.filter(
  (obj: { readonly name: string; readonly type: number }) =>
    obj.type === enumTest.TESTE_A ||
    obj.type === enumTest.TESTE_B ||
    obj.type === enumTest.TESTE_C ||
    obj.type === enumTest.TESTE_D ||
    obj.type === enumTest.TESTE_E
)[0]

console.log(filter)
