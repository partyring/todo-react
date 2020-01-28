import React from 'react';
import Form from './Form';
import Weather from './Weather';

// Define constant outside of class to make it global
const API_KEY="df529ccde288ee0443776bb8cc26a08d";

// Fetches API data from openweathermap.org
class GetWeather extends React.Component {

    // Give state initial valuesspain
    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        descrpition: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();

        // Grab from form
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city && country) {

            // Retrieve API data
            const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();
 
            console.log(data);

            if (data.cod === 200) {

                // DO NOT **EVER** DIRECTLY MANIPULATE THE STATE!
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    error: ""
                })


                var rainPattern = /rain/i;
                var result = this.state.description.match(rainPattern);

                if(result !== null) {
                    setTimeout(() => {
                        window.location.replace("https://www.youtube.com/watch?v=l5aZJBLAu1E")
                    }, 4000)
                }

            } else {
                this.setState({
                    error: "sorry, couldn't catch that!"
                })
            }

        } else {
            this.setState({
                error: "please enter a city and country to check the weather!"
            })
        }

    }

    render() {

        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather 
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default GetWeather;