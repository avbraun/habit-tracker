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
  weeklyNum: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  days: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: null
  }
})

module.exports = Habit
