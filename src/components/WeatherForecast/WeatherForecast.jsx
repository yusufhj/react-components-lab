import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'
import WeatherData from './WeatherData'

const WeatherForecast = ({ weatherForecast }) => {
    return (
        <div className="weather">
            {/* <h2>{weatherForecast.day}</h2> */}
            {/* <img src={weatherForecast.img} alt={weatherForecast.imgAlt} /> */}
            <WeatherIcon img={weatherForecast.img} imgAlt={weatherForecast.imgAlt} />
            {/* <p><span>Conditions: </span>{weatherForecast.conditions}</p>
            <p><span>Time: </span>{weatherForecast.time}</p> */}
            <WeatherData day={weatherForecast.day} conditions={weatherForecast.conditions} time={weatherForecast.time} />
        </div>
    )
}

export default WeatherForecast