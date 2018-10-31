const Sequelize = require('sequelize')
const db = require('../db')

const Stat = db.define('stat', {
  longStreakDays: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  longStreakHabit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalApplause: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = Stat
