import React from 'react'
import Rainbow from './components/hoc/Rainbow'

// Render the 'about' page
const About = () => {
    return (
        <div className="todo-app container">
            <h1 className="center blue-text">about</h1>
            <p className="center">Hello & welcome to my first ever React app!</p>
        </div>

    )
}

export default Rainbow(About)