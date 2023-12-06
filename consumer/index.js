import Kafka from 'node-rdkafka';
import event from '../event.js';

console.log('Starting consumer');

const consumer = new Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('Consumer ready');
    consumer.subscribe(['test']);
    consumer.consume();
}).on('data', (data) => {
    console.log(`Received message: ${event.fromBuffer(data.value)}`);
});