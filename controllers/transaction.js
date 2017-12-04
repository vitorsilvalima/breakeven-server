const { transactionModel } = require('./../models/transaction')

const createOrUpdateTransaction = (tid, transaction) => transactionModel.findOneAndUpdate(
    { tid },
    transaction,
    { 
        upsert: true,
        'new': true
    }
)

exports.getAllTransaction = (req, res, next) => {
    transactionModel.find({})
    .then(transactions => {
        res.json(transactions)
    })
    .catch(next)
}

exports.createOrUpdateTransaction = (req, res, next) => {
    const { transaction } = req.body

    createOrUpdateTransaction(transaction.tid, transaction)
    .then(transaction => {
        res.json(transaction)
    })
    .catch(erro => {
        console.log(erro)
        next(erro)
    })
}