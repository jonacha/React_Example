import React, { Component } from 'react';

/*class Tiempo extends Component{

	render(){
		return(
			<div>
			{this.props.ciudad && this.props.pais&&<div>
				<p>Ciudad: {this.props.ciudad}</p>
			<p>Pais: {this.props.pais}</p>
			<p>temperatura: {this.props.temperatura}</p>
			<p>Humedad: {this.props.humedad}</p>
			<p>Descipcion:{this.props.descripcion}</p>

			</div>

			}
			<p>{this.props.error}</p>
			</div>
				)
	}
};*/
	const Tiempo=(props)=>{	return(//Se puede quitar el return ||Si solo hay un dato se puede poner el props sin parentesis
			<div>
			{props.ciudad && props.pais&&<div>
			<p>Ciudad: {props.ciudad}</p>
			<p>Pais: {props.pais}</p>
			<p>temperatura: {props.temperatura}</p>
			<p>Humedad: {props.humedad}</p>
			<p>Descipcion:{props.descripcion}</p>

			</div>

			}
			<p>{props.error}</p>
			</div>
				)
	}
export default Tiempo;