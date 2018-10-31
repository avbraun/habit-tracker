import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {postHabit} from '../store'

class HabitCreator extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      weeklyNum: null,
      days: null
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUpdate(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
    console.log('this.state: ', this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createHabit(this.state)
    this.setState({
      name: '',
      description: '',
      weeklyNum: null,
      days: null
    })
  }

  render() {

    // let {} = this.props;

    return (
      <div>
        <h3>Habit Creator</h3>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleUpdate}
        >
          <label>Habit name:</label>
          <input
            name="name"
          />
          <label>Description (optional):</label>
          <input
            name="description"
          />
          <label>Times per week:</label>
          <input
            name="weeklyNum"
          />
          <label>Days:</label>
          <input
            name="days"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

const mapDispatch = (dispatch) => {
  return {
    createHabit (habit){
      dispatch(postHabit(habit))
    }
  }
}

export default connect(mapState, mapDispatch)(HabitCreator)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
