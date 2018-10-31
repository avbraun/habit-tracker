const router = require('express').Router()
const {Habit} = require('../db/models')
module.exports = router

router.post('/new', (req, res, next) => {
  Habit.create({
    name: req.body.name,
    description: req.body.description,
    goal: req.body.goal,
    goalDays: req.body.goalDays,
    currentDays: req.body.days
  })
    .then(habit => res.json(habit))
    .catch(next)
})
