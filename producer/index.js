import Kafka from "node-rdkafka";
import event from "../event.js"

console.log("Starting producer");

const producer = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, {
    topic: 'test'
});

producer.on('error', (err) => {
    console.log(`Error from producer: ${err}`);
});

function queueMessage(message) {
    const category = getCategory();
    const noise = getNoise(category);
    const eventMessage = {category, noise};
    const success = producer.write(event.toBuffer(eventMessage));
    if (success){
        console.log(`Produced message: ${JSON.stringify(eventMessage)}`);
    }else{
        console.log("Too many messages in the queue already");
    }
}

function getCategory(message) {
    const categories = ['FISH','BIRD','CAT','DOG','REPTILE','HORSE','RABBIT','BARNYARD','POULTRY','PIG'];
    return categories[Math.floor(Math.random() * categories.length)];
}

function getNoise(animal) {
    if (animal === 'FISH') {
        const noise = ['glub', 'blub', 'blub blub', 'glub glub', 'blub blub blub'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'BIRD') {
        const noise = ['tweet', 'chirp', 'chirp chirp', 'tweet tweet', 'chirp chirp chirp'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'CAT') {
        const noise = ['meow', 'purr', 'meow meow', 'purr purr', 'meow meow meow'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'DOG') {
        const noise = ['woof', 'bark', 'woof woof', 'bark bark', 'woof woof woof'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'REPTILE') {
        const noise = ['hiss', 'slither', 'hiss hiss', 'slither slither', 'hiss hiss hiss'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'HORSE') {
        const noise = ['neigh', 'whinny', 'neigh neigh', 'whinny whinny', 'neigh neigh neigh'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'RABBIT') {
        const noise = ['squeak', 'thump', 'squeak squeak', 'thump thump', 'squeak squeak squeak'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'BARNYARD') {
        const noise = ['moo', 'oink', 'moo moo', 'oink oink', 'moo moo moo'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'POULTRY') {
        const noise = ['cluck', 'squawk', 'cluck cluck', 'squawk squawk', 'cluck cluck cluck'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else if(animal === 'PIG') {
        const noise = ['oink', 'snort', 'oink oink', 'snort snort', 'oink oink oink'];
        return noise[Math.floor(Math.random() * noise.length)];
    }else{
        return "silence"
    }
}

setInterval(() => {
    queueMessage();
}, 1000);