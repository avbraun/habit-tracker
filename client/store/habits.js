import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const CREATE_HABIT = 'CREATE_HABIT'

/**
 * INITIAL STATE
 */
const habits = []

/**
 * ACTION CREATORS
 */
const createHabit = habit => ({type: CREATE_HABIT, habit})

/**
 * THUNK CREATORS
 */
export const postHabit = habit =>
  dispatch =>
    axios.post('/api/habits/new', habit)
      .then(res =>
        dispatch(createHabit(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = habits, action) {
  switch (action.type) {
    case CREATE_HABIT:
      return [...state, action.user]
    default:
      return state
  }
}
