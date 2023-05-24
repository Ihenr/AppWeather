import React from 'react';
import './Card.css';
import Loading from '../Loading/Loader';

const Card = ({ showData, loadingData, weather, forecast }) => {
  let todate = new Date();
  let day = todate.getDate();
  let month = todate.getMonth() + 1;
  let year = todate.getFullYear();
  let date = day + '/' + month + '/' + year;
  var url = '';
  var iconUrl = '';
  var iconUrl3 = '';
  var iconUrl6 = '';
  var iconUrl9 = '';
  var forecastDate3 = '';
  var forecastDate6 = '';
  var forecastDate9 = '';

  if (loadingData) {
    return <Loading />;
  }

  if (showData) {
    url = 'https://api.openweathermap.org/img/w/';
    iconUrl = url + weather.weather[0].icon + '.png';
    iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
    iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
    iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      '/' +
      forecast.list[1].dt_txt.substring(5, 7) +
      '/' +
      forecast.list[1].dt_txt.substring(0, 4) +
      ' ' +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      '/' +
      forecast.list[2].dt_txt.substring(5, 7) +
      '/' +
      forecast.list[2].dt_txt.substring(0, 4) +
      ' ' +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      '/' +
      forecast.list[3].dt_txt.substring(5, 7) +
      '/' +
      forecast.list[3].dt_txt.substring(0, 4) +
      ' ' +
      forecast.list[3].dt_txt.substring(11, 13);
  }
  return (
    <div className="body">
      {showData === true ? (
        <div className="card">
          <div className="card__img">
            <h2>{(weather.main.temp - 273.15).toFixed(2)} °C</h2>
            <img src={iconUrl} alt="Tiempo"></img>
            <p className="capitalize text-xl">{weather.weather[0].description}</p>
          </div>
          <div className="card__info">
            <div className="card__info__header">
              <h3 className="title">{weather.name + ', ' + weather.sys.country} </h3>
              <span className="text-black date"> {date}</span>
            </div>
            <div className="card__info__body">
              <h5 className="text-black">
                <b>Velocidad del Viento: </b> <span>{weather.wind.speed} m/s</span>
              </h5>
              <h5 className="text-black">
                <b>Humedad: </b> <span>{weather.main.humidity} %</span>
              </h5>
              <h5 className="text-black">
                <b>Temperatura máxima: </b>{' '}
                <span>{(weather.main.temp_max - 273.15).toFixed(2)} °C</span>
              </h5>
              <h5 className="text-black">
                <b>Temperatura mínima: </b>
                <span>{(weather.main.temp_min - 273.15).toFixed(2)} °C</span>
              </h5>
              <h5 className="text-black">
                <b>Sensación térmica: </b>{' '}
                <span>{(weather.main.feels_like - 273.15).toFixed(2)} °C</span>
              </h5>
            </div>
            <hr />
            <div className="card__info__climas">
              <div className="flex justify-center flex-col items-center card__info__clima">
                <p className="text-black">{forecastDate3}H</p>
                <img src={iconUrl3} alt="icon"></img>
                <span className="text-gray-600 capitalize">
                  {forecast.list[1].weather[0].description}
                </span>
                <p className="text-gray-600">
                  {(forecast.list[1].main.temp - 273.15).toFixed(2)} °C
                </p>
              </div>
              <div className="flex justify-center flex-col items-center card__info__clima">
                <p className="text-black">{forecastDate6}H</p>
                <img src={iconUrl6} alt="icon"></img>
                <span className="text-gray-600 capitalize">
                  {forecast.list[2].weather[0].description}
                </span>
                <p className="text-gray-600">
                  {(forecast.list[2].main.temp - 273.15).toFixed(2)} °C
                </p>
              </div>
              <div className="flex justify-center flex-col items-center card__info__clima">
                <p className="text-black">{forecastDate9}H</p>
                <img src={iconUrl9} alt="icon"></img>
                <span className="text-gray-600 capitalize">
                  {forecast.list[3].weather[0].description}
                </span>
                <p className="text-gray-600">
                  {(forecast.list[3].main.temp - 273.15).toFixed(2)} °C
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="uppercase">Sin datos</h2>
      )}
    </div>
  );
};

export default Card;
