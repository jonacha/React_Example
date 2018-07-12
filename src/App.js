import React, { Component } from 'react';
//import React from 'react'; Dos opciones para importar react
import logo from './logo.svg';
import './App.css';
import Tareas from'./components/Tareas'
import Weather from './components/Weather'
import Maps from './components/Maps'
import {todos} from'./todos.json'
import {  Link, Route, Switch } from "react-router-dom";



const API_KEY ="15590aa8ba936d6c697d9310428171f1";
//const url="http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=15590aa8ba936d6c697d9310428171f1";
class App extends Component {

//class App extends React.Component { Dos opciones para los metodos
  constructor(){
    super();
    this.state={
      todos,
      temperatura:undefined,
      ciudad:undefined,
      pais:undefined,
      humedad:undefined,
      error:undefined
    }

  this.handleAddTodo=this.handleAddTodo.bind(this);
  this.borrar=this.borrar.bind(this);
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
  handleAddTodo(todo){
    console.log("llego "+todo)
  this.setState({//Metodo para ig
    todos:[...this.state.todos,todo]
  }) 
}
borrar(index){
console.log(index);
if(window.confirm("¿Quieres eliminar la tarea?")){
this.setState({
  todos:this.state.todos.filter((e, i)=>{
    return i!==index
  })
})
}
}
  render() {//Metodo dibujado

    //console.log(this.state.todos)
 

    return (
      <div className="App">

   
          
        {/* Comentario <Navigation titulo="Navegando"/> */}
  
       <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/weather">Weather</Link></li>
      <li> <Link to="/mapas">Mapas</Link></li>
      <li> <Link to="/mongodb">MongoDB</Link></li>
      <li> <Link to="/tareas">Tareas</Link></li>
    </ul>
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/mapas" component={Maps} />
          <Route path="/tareas" component={Tareas} />
        </Switch>
    <img src={logo} className="App-logo" alt="logo" />
 </div>
    );
  } 
}

export default App;
