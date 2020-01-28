import React from 'react'
import GetWeather from './GetWeather'

const Search = () => {
    return (
        <div className="todo-app container">
            <h1 className="center blue-text">search weather</h1>
            <p className="center">get the current forecast to save yourself from looking out of the window</p>

            <GetWeather />

        </div>

    )
}

export default Search