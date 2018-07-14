import React, { Component } from 'react';
import { Card, CardHeader, CardLink   } from "react-ui-cards";
import logo from '../logo.svg';


class Perfil extends Component{
	constructor(){
		super();
		this.state={

		};

	}

	render(){

		return(
      <div class="container"> 
		
				<div className="card mt-10">
				<div className="user-card-header" ></div>
				<div className="user-card-header" > 

				<img src={require("../img/new.jpg")} />
						<div className="user-card-avatar">	<img src={require("../img/Jon.jpg")} /></div>
				</div>
		
				<div className="user-card-body">
					<div className="user-card-name"> <h1>Jon Acha</h1></div>
					<div className="user-card-position-name"><p> <h4>Graduado de ingenieria</h4>
				
					</p>
					</div>
					<p><h5>Lenguajes
					
					</h5></p><p>CSS</p>
					<p>HTML</p>
					<p>JavaScript</p>


				</div>

				<img src={logo} className="App-logo" alt="logo" />



				</div>


</div>
			)
	}
}
export default Perfil;