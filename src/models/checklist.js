const mongoose = require('mongoose');

const checkListSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('checklist', checkListSchema);
//observar erro na aula 24 e 25 se der erro subistituir para Checklist