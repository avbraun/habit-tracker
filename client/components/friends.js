import React from 'react';
import { connect } from 'react-redux';

class Friends extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friendHabits: [
        {
          name: 'Habit1',
          user: {
            firstName: 'Mike',
            lastName: 'Venere Braun'
          },
          currentStreak: 5
        },
        {
          name: 'Habit2',
          user: {
            firstName: 'Kaitlin',
            lastName: 'Winnie'
          },
          currentStreak: 7
        },
        {
          name: 'Habit3',
          user: {
            firstName: 'Josephine',
            lastName: 'Loong'
          },
          currentStreak: 3
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <h1>Friends' Habits</h1>
        <p>Here are what some of your friends are up to. Give them some encouragement!</p>
        {this.state.friendHabits.map(habit =>
          <div>
            <p>{habit.user.firstName} {habit.user.lastName} has kept up {habit.name} for {habit.currentStreak} days</p>
          </div>)}
      </div>)
  }
}

const mapState = (state) => {
  // return {
  //   friendHabits: state.friendHabits
  // }
}

const mapDispatch = (dispatch) => {
  return {
    // createHabit (habit){
    //   dispatch(postHabit(habit))
    // }
  }
}

export default connect(mapState, mapDispatch)(Friends)
