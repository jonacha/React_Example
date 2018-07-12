import React, { Component } from 'react';
//import React from 'react'; Dos opciones para importar react
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import TodoForms from './components/TodoForms'
import Titles from "./components/Titles"
import Form from "./components/Form"
import Tiempo from "./components/Tiempo"
import Tareas from'./components/Tareas'
import Weather from './components/Weather'
import {todos} from'./todos.json'




const API_KEY ="15590aa8ba936d6c697d9310428171f1";
const url="http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=15590aa8ba936d6c697d9310428171f1";
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
   const todos= this.state.todos.map((todo,i)=>{
      return(
     <div className="col-md-4">
   
          <div className="card mt-4">
            <div className="card-header">

             <h3>{todo.title} </h3>
              <span className="badge badge-pill badge-dark ml-2">{todo.priority} </span>
            </div>
           <div  className="card-body">
           <p> {todo.descrition}</p>
              <p> {todo.responsibe}</p>
            </div> 
          <div className="card-footer">
          <button 
            onClick={this.borrar.bind(this,i)}
            className="btn btn-danger"> Delete
          </button>

          </div>
          </div>

           </div>
        
        )
    })

    return (
      <div className="App">

   
          
        {/* Comentario <Navigation titulo="Navegando"/> */}

   
           <Navigation titulo="Navegando "/>

          <img src={logo} className="App-logo" alt="logo" />
          <div  className="card mt-4">
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
          <br></br>
                     <nav className="navbar navbar-dark bg-dark"> 
          <a href="" className="text-white">Creador de tareas sin base de datos <span className="badge badge-pill badge-light ml-2"> {this.state.todos.length} </span>
          </a>

          </nav>
                <TodoForms onAddTodo={this.handleAddTodo}/> 
      {this.state.title}-{this.state.ntareas}
      <div className="container"> 
        <div className="row mt-4"> 
              {todos}

        </div>

      </div>
      <Weather/>

      </div>
    );
  }
}

export default App;
