import React, { Component } from 'react';



class TodoForms extends Component{
	constructor(){
		super();
		this.state={
			traduccion:undefined,
			idiomaA:'',
			idiomaB:'',
			Ttraduccion:'',
			aTraduccion:'',

		};
		this.handleInput=this.handleInput.bind(this); //Para que la llamada del metodo si queremos usar metodos externos. 
		//Esto es para HTML
		this.handleSubmit=this.handleSubmit.bind(this);
		//Hay funcion flecha tambien
	}
	handleInput(e){
		const{value,name}=e.target;
		this.setState({
			[name]:value
		})
	//console.log(e.target.value);
	//console.log(e.target.value,e.target.name);
	//console.log(this.state);
	//para el buscador
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.onAddTodo(this.state);
		console.log("enviando");
		  this.setState({
		      idiomaA: '',
		      Ttraduccion: '',
		});

	}
	render(){
		return(
				<div className="card">
				<div className="card-header">
				Añadir Traduccion
				</div>
				<form className="card-body" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input 
						type="text"
						name="title"
						className="form-control"
						placeholder="Title"
						onChange={this.handleInput}
						/>
					</div>
					<div className="form-group">
						<input 
						type="text"
						name="responsibe"
						className="form-control"
						placeholder="Responsive"
						onChange={this.handleInput}
						/>
					</div>
					<div className="form-group">
						<input 
						type="text"
						name="descrition"
						className="form-control"
						placeholder="Description"
						onChange={this.handleInput}
						/>
					</div>	
					<div className="form-group">

					</div>															
				
					<button type="submit" className="btn  large btn-primary ">
					Traducir y guardar
					</button>
					<button type="submit" className="btn  large btn-primary ">
					Solo Traducir
					</button>
				</form>

				</div>
			)
	}
}
export default TodoForms;