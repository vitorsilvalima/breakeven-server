const mongoose = require('mongoose');
const { dataBaseConfig } = require('../config/databaseConfig')

const dbConfig = dataBaseConfig()
mongoose.connect(dbConfig.url , { useMongoClient: true });
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const addressSchema =  new Schema({
    "street": String,
    "complementary": String,
    "street_number": String,
    "neighborhood": String,
    "city": String,
    "state": String,
    "zipcode": String,
    "country": String,
})

const shippingSchema = new Schema({
    "address": String,
    "name": String,
    "fee": Number,
    "delivery_date": String,
    "expedited": Boolean
})

const customerSchema = new Schema({
    "external_id": String,
    "type": String,
    "country": String,
    "document_number": String,
    "document_type": String,
    "name": String,
    "email": String,
    "phone_numbers": [String],
    "born_at": String,
    "birthday": String,
    "gender": String,
    "date_created": Date
})

const cartItem = new Schema({
    "title": String,
    "unit_price": Number,
    "quantity": Number,
    "category": String,
    "tangible": Boolean,
    "venue": String,
    "date": String
})

const cardSchema =  new Schema({
    "id": String,
    "date_created": Date,
    "date_updated": Date,
    "brand": String,
    "holder_name": String,
    "first_digits": String,
    "last_digits": String,
    "country": String,
    "fingerprint": String,
    "valid": Boolean,
    "expiration_date": String
})

const transactionSchema = new Schema({
    "status": String,
    "refse_reason": String,
    "status_reason": String,
    "acquirer_response_code": String,
    "acquirer_name": String,
    "acquirer_id": String,
    "authorization_code": String,
    "soft_descriptor": String,
    "tid": Number,
    "nsu": Number,
    "date_created": Date,
    "date_updated": Date,
    "amount": Number,
    "authorized_amount": Number,
    "paid_amount": Number,
    "refunded_amount": Number,
    "installments": Number,
    "id": Number,
    "cost": Number,
    "card_holder_name": String,
    "card_last_digits": String,
    "card_first_digits": String,
    "card_brand": String,
    "payment_method": String,
    "capture_method": String,
    "antifraud_score": Number,
    "boleto_url": String,
    "boleto_barcode": String,
    "boleto_expiration_date": Date,
    "subscription_id": String,
    "phone": String,
    "address": String,
    "customer": customerSchema,
    "billing": {
        "address": addressSchema,
        "id": Number,
        "name": String
    },
    "shipping": {
        "address": addressSchema,
        "id": Number,
        "name": String,
        "fee": Number,
        "delivery_date": String,
        "expedited": Boolean
    },
    "items": [ cartItem ],
    "card": cardSchema,
    "split_rules": [String],
    "metadata": {},
    "antifraud_metadata": {},
    "reference_key": String
})

exports.transactionModel = mongoose.model('transaction', transactionSchema)

