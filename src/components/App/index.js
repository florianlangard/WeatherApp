// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import CurrentWeather from 'src/components/CurrentWeather';
import ForecastSection from 'src/components/ForecastSection';
import Loader from 'src/components/Loader';
import Error from 'src/components/Error';
// import Footer from 'src/components/Footer';

// == Import
import './styles.scss';
// import of test data :
// import weather from 'src/data/weather';
// import forecastdata from 'src/data/forecastdata';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [coords, setCoords] = useState([]);
  const [forecastData, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [nightTheme, setNightTheme] = useState('day');
  // const prefLang = navigator.language;
  const isInitialMount = useRef(true);

  if (nightTheme === 'night') {
    const bodyElement = document.querySelector('body');
    bodyElement.dataset.theme = ('night');
  }
  else {
    const bodyElement = document.querySelector('body');
    bodyElement.dataset.theme = ('day');
  }

  const loadCityWeather = () => {
    setLoading(true);
    setDisplayError(false);

    // Testing with data
    // setCurrentWeather(weather);
    // setCoords(weather.coord);
    // setForecast(forecastdata.daily);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=fr&units=metric&appid=d15919acf4e727493e99282a9db730de`)
      .then((response) => {
        setCurrentWeather(response.data);
        setCoords(response.data.coord);
      })
      .catch(() => {
        setTimeout(() => {
          setLoading(false);
          setDisplayError(true);
        }, 1000);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
    else {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=current,minutely,hourly&units=metric&lang=fr&appid=d15919acf4e727493e99282a9db730de`)
        .then((response) => {
          setForecast(response.data.daily);
        })
        .catch(() => {

        })
        .finally(() => {

        });
    }
  }, [coords]);

  return (
    <div className="app">
      <Header />
      <SearchBar search={search} setSearch={setSearch} manageSubmit={loadCityWeather} />
      {
        (!loading && !displayError && currentWeather)
        && <CurrentWeather currentWeather={currentWeather} />
      }
      {
        (!loading && !displayError && forecastData)
        && <ForecastSection forecastData={forecastData} />
      }
      {loading && <Loader />}
      {displayError && <Error />}
      {/* <Footer /> */}
    </div>
  );
};

// == Export
export default App;
