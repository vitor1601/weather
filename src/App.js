import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[city, setCity] = useState("")
  const [weatherForecast, setWeatherForecast] = useState(null)
  const handleChange = (e) => {
  console.log ('alterou!!', e.target.value)
  setCity(e.target.value)
  }
  function handleSearch() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=ed4c1038c1154ee7bb210759231107&q=${city}&lang=pt`)
    .then((Response) => {
      if(Response. status === 200){
        return Response.json()
      }
    })
    .then((data)=> {
      setWeatherForecast (data)
    });
  };
  
  

  return (
    <div>
      <nav className= "navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className= "navbar-brand text-white" href='#stop'>
          Previsão do tempo com Vitor 
        </a>
      </nav>
      <main className="container">
        <div className="jumbotron">
          <h1>
            Verifique agora a previsão do tempo da sua cidade!
          </h1>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <input 
              onChange={handleChange}
              className="form-control" 
              value={city}/>
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary">
            Pesquisar
          </button>

          {            
            weatherForecast ? (
              <div>
                <div className = 'mt-4 d-flex align-items-center'>
                  <div>
                    <img src={weatherForecast.current.condition.icon}/>
                  </div>

                  <div>
                    <h3>
                      Hoje o dia esta:{weatherForecast.current.condition.text}
                    </h3>
                    <p className='lead'>
                      Temp: {weatherForecast.current.temp_c} Cº
                    </p>
                    <p className='lead'>
                      Temp: {weatherForecast.current.temp_f} Fº
                    </p>
                  </div>
                </div>
              </div>
          ) : null 
          }
          
          


        </div>
      </main>
    </div>
  );
}

export default App;
