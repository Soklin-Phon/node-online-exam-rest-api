const { Kafka } = require('kafkajs')

export const kafkaConfig = new Kafka({
  clientId: 'api-stream',
  brokers: ['localhost:9092']
});
