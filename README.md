# Ethereum Log Parser

[![CircleCI][circleci-image]][circleci-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]


A simple parser for Ethereum event logs.

## Installation

```
npm install eth-log-parser
```

## Usage

```js
const parseLog = require('eth-log-parser');

// ERC20 Transfer log
const log = {
  address: '0xefE1e4e13F9ED8399eE8e258b3a1717b7D15f054',
  blockHash: '0xde42b82c4e28122218d79f8491b05587608a8c9bb87c0d0df9be9fb9ae6f7e13',
  blockNumber: 6596988,
  data: '0x0000000000000000000000000000000000000000000000056bc75e2d63100000',
  logIndex: 11,
  removed: false,
  topics: [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    '0x000000000000000000000000343c6a169d973bbf33a8f1535754a4745a3bd9c1',
    '0x00000000000000000000000078a3339ad6a565b4136077c8878970d7f1b66021'
  ],
  transactionHash: '0x686943cee4035375b25209a2972535c93eefb688fad42d72e518c452387c69c9',
  transactionIndex: 10,
  id: 'log_797f3ed3'
};

const ERC20_ABI = /* ABI for ERC20 token contract */;

const parsedLog = parseLog(log, ERC20_ABI);

console.log(parsedLog);

/*
{
  event: 'Transfer',
  signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  address: '0xefE1e4e13F9ED8399eE8e258b3a1717b7D15f054',
  blockHash: '0xde42b82c4e28122218d79f8491b05587608a8c9bb87c0d0df9be9fb9ae6f7e13',
  blockNumber: 6596988,
  transactionHash: '0x686943cee4035375b25209a2972535c93eefb688fad42d72e518c452387c69c9',
  transactionIndex: 10,
  logIndex: 11,
  raw: {
    data: '0x0000000000000000000000000000000000000000000000056bc75e2d63100000',
    topics: [
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      '0x000000000000000000000000343c6a169d973bbf33a8f1535754a4745a3bd9c1',
      '0x00000000000000000000000078a3339ad6a565b4136077c8878970d7f1b66021'
    ]
  },
  returnValues: {
    from: '0x343c6A169D973bBF33A8F1535754A4745a3BD9C1',
    to: '0x78a3339aD6A565B4136077C8878970D7f1B66021',
    value: '100000000000000000000'
  }
}
*/
```


[circleci-image]: https://circleci.com/gh/AleG94/eth-log-parser.svg?style=svg
[circleci-url]: https://circleci.com/gh/AleG94/eth-log-parser
[coveralls-image]: https://coveralls.io/repos/github/AleG94/eth-log-parser/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/AleG94/eth-log-parser?branch=master
[npm-image]: https://img.shields.io/npm/v/eth-log-parser.svg
[npm-url]: https://npmjs.org/package/eth-log-parser
[license-image]: https://img.shields.io/npm/l/eth-log-parser.svg
[license-url]: https://github.com/AleG94/eth-log-parser/blob/master/LICENSE