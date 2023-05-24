import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';

const Weather = () => {
  let urlWeather =
    'https://api.openweathermap.org/data/2.5/weather?appid=15bc8ff2e75b7596f429d2e88702bb31&lang=sp';
  let cityUrl = '&q=';
  let urlForecast =
    'https://api.openweathermap.org/data/2.5/forecast?appid=15bc8ff2e75b7596f429d2e88702bb31&lang=sp';

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');
  console.log(location);

  const getLocation = async (loc) => {
    setloading(true);
    setLocation(loc);
    // console.log(loc);

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((resp) => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then((weatherData) => {
        // console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        setShow(false);
      });

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((resp) => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then((forecastData) => {
        // console.log(forecastData);
        setForecast(forecastData);

        setloading(false);
        setShow(true);
      })
      .catch((error) => {
        // console.log(error);
        setloading(false);
        setShow(false);
      });
  };

  const [position, setPosition] = useState(null);

  const getMiLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (!position) {
          setPosition(pos);
        } else {
          setPosition(position);
          getWeather(position.coords.latitude, position.coords.longitude);
          // console.log(`${position.coords.latitude}--${position.coords.longitude}`);
        }
      },
      () => alert('Usted no dio permiso de la geolocalizacion'),
    );
  };

  const getWeather = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=15bc8ff2e75b7596f429d2e88702bb31`,
    );
    let data = await res.json();
    setWeather(data);
    getLocation(data[0].name);
  };

  useEffect(() => {
    getMiLocation();
  }, [position]);
  return (
    <React.Fragment>
      <Search newLocation={getLocation}></Search>
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      ></Card>
    </React.Fragment>
  );
};

export default Weather;
