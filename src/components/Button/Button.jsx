import React, { useState } from 'react';
import img from '../../assets/img/buscar.png';

const Button = () => {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    if (city === '' || !city) return;
  };
  return (
    <div className="w-3/5 flex justify-end py-7 mx-auto">
      <form className="w-full flex" onSubmit={onSubmit}>
        <input
          id="cityName"
          type="text"
          placeholder="Ingrese la ciudad"
          className="w-4/5 px-4 py-3 rounded-l-lg border-none outline-none"
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button
          className="flex text-white bg-green-800  px-3 py-3 rounded-r-lg uppercase gap-2"
          type="submit"
        >
          <img src={img} className="w-5"></img>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Button;
