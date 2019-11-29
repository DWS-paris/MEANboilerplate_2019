/*
Import
*/
    const Models = require('../../models/index');
    const bcrypt = require('bcryptjs');
    const { cryptData, decryptData } = require('../../services/crypto.service')
//

/*
Methods
*/
    const register = (req) => {
        return new Promise( (resolve, reject) => {
            console.log('register CTRL')
            // Encrypt password
            bcrypt.hash( req.body.password, 10 )
            .then( hash => {
                // Change password with hash
                req.body.password = hash;

                // Save new identity
                Models.identity.create( { 
                    email: req.body.email,
                    password: req.body.password,
                } )
                .then( identity => {
                    // Save new user
                    Models.user.create({
                        identity: identity._id,
                        firstname: cryptData(req.body.firstname),
                        lastname: cryptData(req.body.lastname),
                        birthdate: cryptData(req.body.birthdate)
                    })
                    .then( user => resolve({user, identity}) )
                    .catch( err => reject(err))
                } )
                .catch( err => reject(err))
            })
            .catch( hashError => reject(hashError))
        });
    };

    const login = (req, res) => {
        return new Promise( (resolve, reject) => {
            Models.identity.findOne( { email: req.body.email }, ( err, identity ) => {
                if( err ){
                    return reject(err);
                }
                else{
                    // Check identity password
                    const validatedPassword = bcrypt.compareSync( req.body.password, identity.password );
                    if( !validatedPassword ){
                        return reject('Password is not valid')
                    }
                    else{
                        // Set cookie
                        res.cookie('blog-mean', identity.generateJwt(identity), { httpOnly: true });

                        return resolve( identity )
                    }
                }
            })
        });
    };

    const logout = (res) => {
        return new Promise( (resolve, reject) => {
            // Delete cookie
            res.clearCookie('blog-mean');
            return resolve('User logedout');
        });
    }
//    

/*
Export
*/
    module.exports = {
        register,
        login,
        logout
    }
//