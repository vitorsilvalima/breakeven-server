const { getConfig } = require('./index')

exports.pagarmeConfig = getConfig({
    test: {
        api_key: process.env.NODE_ENV.PAGARME_API_KEY || 'api_key',
        encrypt_key: process.env.NODE_ENV.PAGARME_API_KEY || 'encryption_key'
    },
    production: {
        api_key: process.env.NODE_ENV.PAGARME_API_KEY || 'api_key' ,
        encryption_key: process.env.NODE_ENV.PAGARME_ENCRYPTION_KEY || 'encryption_key'
    },
    development: {
        api_key: process.env.NODE_ENV.PAGARME_API_KEY || 'api_key',
        encrypt_key: process.env.NODE_ENV.PAGARME_ENCRYPTION_KEY || 'encryption_key'
    }
})