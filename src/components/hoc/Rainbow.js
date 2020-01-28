import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red','orange','yellow','green','blue','purple','pink'];
    let coloursLength = colours.length;
    const randomColour = colours[Math.floor(Math.random() * coloursLength)];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        );
    }

}

export default Rainbow