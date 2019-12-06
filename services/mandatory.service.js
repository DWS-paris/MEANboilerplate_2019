/* 
Definition
*/
    const Mandatories = {
       post: ['headline', 'articleBody'],
       identity: ['email', 'password'],
       register: ['email', 'password', 'repeatepassword', 'firstname', 'lastname', 'birthdate']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//