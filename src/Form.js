import React from 'react';

// Weather form which calls API
class Form extends React.Component {

    render() {

        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <label htmlFor="input">city</label>
                    <input type="text" name="city" id="city"></input>

                    <label htmlFor="input">country</label>
                    <input type="text" name="country" id="country"></input>

                    <button>get weather</button>
                </form>
            </div>
        );
    }
}

export default Form;