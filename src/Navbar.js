import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile">
            {/* Link vs NavLink shows active */}
            <li><NavLink to="/">todo::list</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/search-weather">weather</NavLink></li>
            <li><NavLink to="/blog">blog</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Navbar)