const getEnv = env => env || process.env.NODE_ENV || 'test'

exports.getConfig = configObj => env =>  Object.assign({}, configObj[env])
