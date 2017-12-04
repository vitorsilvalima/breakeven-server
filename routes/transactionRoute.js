const { Router } = require('express')

const { 
    createOrUpdateTransaction,
    getAllTransaction
} = require('../controllers/transaction')

const router = Router()
router.get('/transactions', getAllTransaction)
router.post('/transactions', createOrUpdateTransaction)

exports.transactionRouter = router

