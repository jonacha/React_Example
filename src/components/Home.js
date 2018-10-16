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
//http://aldeasinfantiles-wp.lin3sdev.com/wp-json/wp/v2/posts?filter%5Borderby%5D=date&order=desc&categories=1&per_page=9&page=1&_embed:
   fetch('http://aldeasinfantiles-wp.lin3sdev.com/wp-json/wp/v2/posts?filter%5Borderby%5D=date&order=desc&categories=1&per_page=9&page=1&_embed', {
        method: 'GET',
      //  body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log("los datos son")
          console.log(data[0].better_featured_image.media_details.sizes.small.source_url);


     this.setState({
          traducciones:data,
          traduccionesE:data.map((todo,i)=>{
      return(
     <div className="col-md-4" key={i}>
   
          <div className="card mt-4">
            <div className="user-card-header">

  <img src={todo.better_featured_image.media_details.sizes.small.source_url} />
           
            </div>
           <div  className="card-body">
           <row> <p> {todo.date}</p>
              <p> {todo.title.rendered}</p></row>

            <row> <p> VER MÁS</p>
             </row>
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

      {this.state.title}-{this.state.ntareas}
      <div className="container"> 
        <div className="row mt-6"> 
         
            
              {this.state.traduccionesE}
        </div>

      </div>

      </div>
    );
  }
}

export default MongoDB;
