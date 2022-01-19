import React from 'react';
import PropTypes from 'prop-types';

import './forecastsection.scss';
import Forecast from './Forecast';

const ForecastSection = ({ forecastData }) => (
  <div className="forecast-section">
    {forecastData.map((item) => (
      <Forecast
        {...item}
        key={item.dt}
      />
    ))}
  </div>
);

ForecastSection.propTypes = {
  forecastData: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default ForecastSection;
