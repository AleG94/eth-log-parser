'use strict';
const AbiCoder = require('web3-eth-abi');

exports.parse = (log, abi) => {
  const events = abi.filter(e => e.type === 'event' && e.anonymous === false);
  const signature = log.topics[0];
  const event = events.find(e => AbiCoder.encodeEventSignature(e) === signature);

  if (!event) {
    throw Error('Cannot parse unknown event');
  }

  const rawReturnValues = AbiCoder.decodeLog(event.inputs, log.data, log.topics.slice(1));
  const returnValues = Object.keys(rawReturnValues)
    .filter(key => isNaN(key) && key !== '__length__')
    .reduce((obj, key) => ({ ...obj, [key]: rawReturnValues[key] }), {});

  return {
    event: event.name,
    signature: signature,
    address: log.address,
    blockHash: log.blockHash,
    blockNumber: log.blockNumber,
    transactionHash: log.transactionHash,
    transactionIndex: log.transactionIndex,
    logIndex: log.logIndex,
    raw: {
      data: log.data,
      topics: log.topics
    },
    returnValues: returnValues
  };
};
