const router = require('express').Router()
const {Habit} = require('../db/models')
module.exports = router

router.post('/new', (req, res, next) => {
  Habit.create({
    name: req.body.name,
    description: req.body.description,
    weeklyNum: req.body.weeklyNum,
    days: req.body.days
  })
    .then(users => res.json(users))
    .catch(next)
})
