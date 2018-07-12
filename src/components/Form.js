import React, { Component } from 'react';

class Form extends Component{
	render(){
		return(
			<form onSubmit={this.props.getWeather}>
				<div className="form-group">
						<input 
						type="text"
						name="ciudad" //variables para llamas a ofheto
						className="form-control"
						placeholder="Ciudad..."
		
						/>
				
				</div>
			<div className="form-group">
					<input 
						type="text"
						name="pais" //variables
						className="form-control"
						placeholder="Pais..."
		
						/>
			</div>

				<button type="submit" className="btn  large btn-primary ">
					Buscar tiempo
					</button>
							<div className="form-group">


				</div>
			</form>
				)
	}
};
export default Form;