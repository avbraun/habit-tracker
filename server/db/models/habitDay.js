const Sequelize = require('sequelize')
const db = require('../db')

const HabitDay = db.define('habitDay', {
  dayNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  applause: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  note: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = HabitDay
