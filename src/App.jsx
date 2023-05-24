import react from 'react';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="h-screen">
      <div className="w-full">
        <h1 className="text-white text-center bg-[#25223b] uppercase py-4 text-2xl tracking-[.15em] font-bold">
          Clima
        </h1>
      </div>
      <Weather></Weather>
    </div>
  );
}

export default App;
