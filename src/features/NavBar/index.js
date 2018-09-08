import React from 'react'
import './NavBar.css'
import './NavBar.css'
import MyLink from './MyLink' 

const NavBar = props => {
  const headers = [{ name: 'Updates', route:'/updates' },
    { name: 'Legacy', route:'/legacy' },
    { name: 'Check-in', route:'/check-in' },
    { name: 'Profile', route:'/Profile' }
  ]
  return (
    <div className="container">
      {headers.map((header, index) => (
        <MyLink name={header.name} route={header.route} key={index} />
      ))}
    </div>
  )
}

export default NavBar
