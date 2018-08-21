const path = require('path')
const fs = require('fs')
const { SolDict } = require('../')

test('ok', () => {
  const binPath = path.join(__dirname, './data/Sample0_sol_Sample.bin')
  const bin = fs.readFileSync(binPath, 'utf8')
  const code = Buffer.from(bin, 'hex')
  const solDict = new SolDict(code)
  solDict.build()
  expect(1).toEqual(1)
})
