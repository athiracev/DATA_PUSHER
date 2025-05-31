const { v4: uuidv4 } = require('uuid');

exports.generateSecret = ()=>uuidv4().replace(/-/g, '')
exports.generateAccountId =()=>'ACC-' + uuidv4().split('-')[0].toUpperCase()


