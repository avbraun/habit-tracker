import React from 'react'

const MyHabits = (props) => {
  console.log('props: ', props)
  return (
    <div>
    { props.habits.forEach(habit => <div>{habit}</div>) }
    </div>
  )
}

export default MyHabits
