 import React, { Component } from 'react';
//import React from 'react'; Dos opciones para importar react
import '../App.css';
import TodoForms from './TodoForms'
import {todos} from'../todos.json'





class MongoDB extends Component {

//class App extends React.Component { Dos opciones para los metodos
  constructor(){
    super();
    this.state={
      todos,
      traducciones:undefined,
      traduccionesE:undefined,
      temperatura:undefined,
      ciudad:undefined,
      pais:undefined,
      humedad:undefined,
      error:undefined
    }

  this.handleAddTodo=this.handleAddTodo.bind(this);
  this.borrar=this.borrar.bind(this);
  this.getTraducciones=this.getTraducciones.bind(this);
    this.render=this.render.bind(this);
  this.getTraducciones();
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

getTraducciones(){

   fetch('https://traductor2.herokuapp.com/api/traduccion', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {

          console.log(data);
/*
          this.state.traducciones=data;
          this.state.traduccionesE=this.state.traducciones.map((todo,i)=>{
      return(
     <div className="col-md-4" key={i}>
   
          <div className="card mt-4">
            <div className="card-header">

             <h3>Numero de traduccion {i+1} </h3>
           
            </div>
           <div  className="card-body">
           <row> <p> Idioma A {todo.idiomaA}</p>
              <p>Texto A {todo.Ttraduccion}</p></row>

            <row> <p> Idioma B {todo.idiomaB}</p>
              <p>Texto B {todo.Atraduccion}</p></row>
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
    })*/



     this.setState({
          traducciones:data,
          traduccionesE:data.map((todo,i)=>{
      return(
     <div className="col-md-4" key={i}>
   
          <div className="card mt-4">
            <div className="card-header">

             <h3>Numero de traduccion {i+1} </h3>
           
            </div>
           <div  className="card-body">
           <row> <p> Idioma A {todo.idiomaA}</p>
              <p>Texto A {todo.Ttraduccion}</p></row>

            <row> <p> Idioma B {todo.idiomaB}</p>
              <p>Texto B {todo.Atraduccion}</p></row>
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

     })
     this.setState({})
     
        })
        .catch(err => console.error(err));
}


  render() {//Metodo dibujado



    return (
      <div className="App">

   
          
        {/* Comentario <Navigation titulo="Navegando"/> */}


          <br></br>
                     <nav className="navbar navbar-dark bg-dark"> 
          <a href="" className="text-white">Traductor con MongoDB <span className="badge badge-pill badge-light ml-2"> {this.state.todos.length} </span>
          </a>

          </nav>
                <TodoForms onAddTodo={this.handleAddTodo}/> 
      {this.state.title}-{this.state.ntareas}
      <div className="container"> 
        <div className="row mt-4"> 
         
            
              {this.state.traduccionesE}
        </div>

      </div>

      </div>
    );
  }
}

export default MongoDB;
