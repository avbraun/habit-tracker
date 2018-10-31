const User = require('./user')
const Habit = require('./habit')
const HabitDay = require('./habit')
const Stat = require('./stat')
const Comment = require('./comment')

 User.belongsToMany(User, { as: 'user', foreignKey: 'user1', through: 'friends' })
 User.belongsToMany(User, { as: 'friend', foreignKey: 'user2', through: 'friends' })
 User.hasMany(Habit)
 Habit.hasMany(HabitDay)
 Habit.hasMany(Comment)
 Comment.hasOne(User, { as: 'testc', constraints: false})
 User.hasOne(Stat)

module.exports = {
  User,
  Habit,
  HabitDay,
  Stat,
  Comment
}
