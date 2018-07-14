 import React, { Component ,} from 'react';
import '../App.css';
import Titles from "./Titles"
import Form from "./Form"
import Tiempo from "./Tiempo"




const API_KEY ="15590aa8ba936d6c697d9310428171f1";
//const url="http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=15590aa8ba936d6c697d9310428171f1";
class Weather extends Component {

//class App extends React.Component { Dos opciones para los metodos
  constructor(){
    super();
    this.state={

      temperatura:undefined,
      ciudad:undefined,
      pais:undefined,
      humedad:undefined,
      error:undefined
    }

  //this.getTiempo=this.getTiempo.bind(this); //Metodo tradicional hay que poner todo hay
  }

  /*  getTiempo(){
    
  } *///para no poner enlaces

 getWeather =async (e)=>{
  e.preventDefault();
  const ciudad=e.target.elements.ciudad.value;//para llamar a los
  const pais=e.target.elements.pais.value;
 const llamada_api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`);
 //const llamada_api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
  const data =await llamada_api.json();
  if(ciudad&&pais){
  console.log(data);
  data.main.temp=(data.main.temp-273);
  this.setState({
   // todos:todos,
    temperatura:data.main.temp,
    ciudad:data.name,
    pais:data.sys.country,
    humedad:data.main.humidity,
    descripcion:data.weather[0].description,
    error:""

  })
}else{
  console.log("entro");
   this.setState({
      temperatura:undefined,
      ciudad:undefined,
      pais:undefined,
      humedad:undefined,
    error:"Poner Pais y ciudad",

  })
}
 }

  render() {//Metodo dibujado

    return (
      <div className="App">
   <div class="container"> 
          <div  className="card float">
          <div className ="card-header">
               <Titles/>
          </div>


          <div className="card-body">
           <Form  getWeather={this.getWeather}/>
           <Tiempo temperatura={this.state.temperatura}
                ciudad={this.state.ciudad}
                pais={this.state.pais}
                humedad={this.state.humedad}
                descripcion={this.state.descripcion}
                error={this.state.error}
            />
          </div>
          </div>


      </div>
      </div>
    );
  }
}

export default Weather;
