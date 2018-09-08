import React from 'react'
import { NavLink } from 'react-router-dom'

const MyLink = props => {
  const { name, route } = props
  return (
    <div>
      <NavLink
        to={route}
        className="link"
        activeClassName="selected">
        {name}
      </NavLink>
    </div>
  )
}

export default MyLink
