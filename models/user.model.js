/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//

/*
Definition
*/
    const MySchema = new Schema({
        indentity: String,
        firstname: String,
        lastname: String,
        birthdate: Date,
    });
//

/*
Export
*/
    module.exports = mongoose.model( 'user', MySchema );
//