import avro from 'avsc';

export default avro.Type.forSchema({
    type: 'record',
    fields: [
        {
            name: 'category',
            type: {type: 'enum', symbols: ['FISH','BIRD','CAT','DOG','REPTILE','HORSE','RABBIT','BARNYARD','POULTRY','PIG']}
        },
        {
            name: 'noise',
            type: 'string'
        }
    ]
});