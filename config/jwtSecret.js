require('dotenv').config()
const jwtSecret = process.env.SECRET_KEY || 'MySuperSecretPassword'

module.exports = jwtSecret