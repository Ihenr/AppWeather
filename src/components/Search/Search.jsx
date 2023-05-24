import React, { useState } from 'react';
import img from '../../assets/img/buscar.png';
import './Search.css';

const Search = ({ newLocation }) => {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === '' || !city) return alert('Ingrese una ciudad');
    newLocation(city);
  };
  return (
    <div className=" serarch flex  py-7 mx-auto">
      <form className="w-full flex" onSubmit={onSubmit}>
        <input
          id="cityName"
          type="text"
          placeholder="Ingrese la ciudad"
          className="w-4/5 px-4 py-3 rounded-l-lg border-none outline-none"
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button
          className="flex text-white bg-green-800  px-3 py-3 rounded-r-lg uppercase gap-2 justify-center"
          type="submit"
        >
          <img src={img} className="w-5"></img>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Search;
