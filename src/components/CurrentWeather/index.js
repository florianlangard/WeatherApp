import React from 'react';
import PropTypes from 'prop-types';

import './CurrentWeather.scss';

const CurrentWeather = ({ currentWeather }) => {
  console.log(currentWeather);
  return (
    <div className="current-weather">
      <h3 className="current-weather-city">{currentWeather.name}</h3>
      <p className="current-weather-temp">{Math.round(currentWeather.main.temp)}°</p>
      <p className="current-weather-var"><i className="fas fa-temperature-low" /> Min. {Math.round(currentWeather.main.temp_min)}° - <i className="fas fa-temperature-high" /> Max. {Math.round(currentWeather.main.temp_max)}°</p>
      <img
        className="current-weather-icon"
        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
        alt="random alterbnative"
      />
      <p className="current-weather-description">{currentWeather.weather[0].description}</p>
      {/* <p>{currentWeather.coord.lon}</p> */}
      {/* <p>{main.temp}</p> */}
    </div>
  );
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,

};

export default CurrentWeather;
