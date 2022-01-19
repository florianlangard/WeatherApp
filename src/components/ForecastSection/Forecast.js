import React from 'react';
import PropTypes from 'prop-types';

import './forecastsection.scss';

const Forecast = ({ dt, temp, weather }) => {
  const date = dt * 1000;
  const day = new Date(date);
  const finalDate = day.toLocaleString('fr-FR', { weekday: 'short', day: 'numeric' });

  return (
    <div className="forecast-daily">
      <h3 className="forecast-date">{finalDate}</h3>
      <img
        className="forecast-weather-icon"
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="random alterbnative"
      />
      <p className="forecast-temp forecast-min">
        <i className="fas fa-temperature-low" />
        : <span className="bold">{Math.round(temp.min)}°</span>
      </p>
      <p className="forecast-temp forecast-max">
        <i className="fas fa-temperature-high" />
        : <span className="bold">{Math.round(temp.max)}°</span>
      </p>
    </div>
  );
};
export default Forecast;
