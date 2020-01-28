import React from 'react'

const Weather = (props) => {
    return (
        <div className="todo-app container center">
                {/* If/else statements are ?discouraged? in react */}
                { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
                { props.temperature && <p>Temperature: { props.temperature }°C</p> }
                { props.description && <p>Conditions: { props.description }</p> }
                { props.error }
        </div>
    );
}

export default Weather