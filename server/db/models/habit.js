const Sequelize = require('sequelize')
const db = require('../db')

const Habit = db.define('habit', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  goal: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  goalDays: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  currentDays: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: null
  }
})

module.exports = Habit

// add checker for if 'goal' is true, 'goalDays' must not be null
