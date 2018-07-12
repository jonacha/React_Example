 import React, { Component } from 'react';
//import React from 'react'; Dos opciones para importar react
import '../App.css';
import TodoForms from './TodoForms'
import {todos} from'../todos.json'




class Tareas extends Component {

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

      </div>
    );
  }
}

export default Tareas;
