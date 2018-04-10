import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {HabitCreator} from '../components'

/**
 * COMPONENT
 */
class Habits extends React.Component {
  constructor() {
    super()
    this.state = {
      habitCreatorOpen: false
    }
  }

  openHabitCreator = (event) => {
    this.setState({ ...this.state, habitCreatorOpen: !this.state.habitCreatorOpen})
  }

  render() {
    return (
      <div>
        <h3>Want to start some good habits?</h3>
        <button onClick={this.openHabitCreator}>{this.state.habitCreatorOpen ? 'Nevermind' : 'Make a habit'}</button>
        {
          this.state.habitCreatorOpen && <HabitCreator />
        }
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

export default connect(mapState)(Habits)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
