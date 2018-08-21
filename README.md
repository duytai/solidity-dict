## Installation

```bash
npm i solidity-dict
```

## Usage

```node
const { SolDict } = require('solidity-dict')
const solDict = new SolDict(code) // code is a buffer
const dict = solDict.build()
```

`dict` is a hash from `name` to interesting `value`, `value` must be in hex format. For example:

```node
dict = {
  a: '0x55',
  b: '0x88'
}
```

