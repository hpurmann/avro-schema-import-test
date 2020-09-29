const path = require('path')
const { avdlToAVSCAsync } = require('@kafkajs/confluent-schema-registry')

avdlToAVSCAsync(path.join(__dirname, './avdl', 'import.avdl')).then(schema => {
  console.log('schema:', JSON.stringify(schema, null, 2))
})

avdlToAVSCAsync(path.join(__dirname, './avdl', 'import.avdl')).then(schema => {
  console.log('schema:', JSON.stringify(schema, null, 2))
})
