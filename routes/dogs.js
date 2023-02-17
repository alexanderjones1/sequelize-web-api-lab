const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')

router.post('/', dogsCtrl.create)
router.get('/', dogsCtrl.index)
router.put('/:id', dogsCtrl.update)
router.delete('/:id', dogsCtrl.delete)

router.post('/:id/walkings', dogsCtrl.addWalking)

module.exports = router