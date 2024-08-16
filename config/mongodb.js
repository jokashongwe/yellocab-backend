require('dotenv').config()
const mongodb = process.env.MONGO_DB_URL || "mongodb://localhost:27017/yellocabb"

module.exports = mongodb;