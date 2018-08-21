const opcodes = require('./opcodes')

class SolDict {
  constructor(code) {
    this.code = code
  }

  build() {
    let pc = 0
    const dict = {}
    while (pc < this.code.length) {
      const { name } = opcodes(this.code[pc], true)
      if (name.slice(0, 4) === 'PUSH') {
        const jumpNum = this.code[pc] - 0x5f
        const d = this.code.slice(pc + 1, pc + jumpNum + 1)
        dict[d.toString('hex')] = 1
        pc += jumpNum
      }
      pc += 1
    }
    for (const key in dict) {
      dict[key] = `0x${key}`
    }
    return dict
  }
}

module.exports = {
  SolDict,
}
