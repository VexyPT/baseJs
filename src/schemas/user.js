const { Schema, model } = require("mongoose");

let userSchema = new Schema({
    id: { type: String, require: true },
    coins: { type: Number, default: 0 }
});

module.exports = model('userSchemma', userSchema);