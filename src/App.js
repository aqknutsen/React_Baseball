import React, { Component } from 'react';
import logo from './logo.svg';
import {Header} from 'semantic-ui-react'
import { AppRegistry, View, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import './App.css';

export class Scorecard extends Component {
	
	render() {
		
		return( 
			<div>
				  <PlayerRow/>

				  <PlayerRow/>

				  <PlayerRow/>
				  
				  <PlayerRow/>
				  
				  <PlayerRow/>
				  
				  <PlayerRow/>
				  
				  <PlayerRow/>
				
				  <PlayerRow/>
				 
				  <PlayerRow/>
				  
				  <BottomRow/>
			</div>
		);
	}
}

export class BottomRow extends Component {
	
	render() {
		
		var Style = {type: "text", name: "RunsHits", height: '30px', width: "121px"}
		
		return(
			<div>
				<form>
					<label>
						<div>
							<span>
								<input value = 'R' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
						<div>
							<span>
								<input value = 'H' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
					</label>
				</form>
				<form>
					<label>
						<div>
							<span>
								<input value = 'E' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
						<div>
							<span>
								<input value = 'LOB' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
					</label>
				</form>
				<form>
					<label>
						<div>
							<span>
								<input value = 'K' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
						<div>
							<span>
								<input value = 'BB' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
					</label>
				</form>
				<form>
					<label>
						<div>
							<span>
								<input value = 'S' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
						<div>
							<span>
								<input value = 'P' style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
					</label>
				</form>
			</div>
		
		);
		
	}
}

export class PlayerRow extends Component {
	
	render() {
		
		var style = {float: 'left'}
		var divStyle = {marginBottom: '1px'}
		return(
			 <div style = {divStyle}>
				  <Player/>	
				  <div style = {style}>
					  <Box/>
					  <Box/>
					  <Box/>
					  <Box/>
					  <Box/>
					  <Box/>
					  <Box/>
					  <Box/>
					  <Box/>
				  </div>
				  <PlayerStats/>
			  </div>
		);
	}
	
}

export class PlayerStats extends Component {
	
	constructor(props) {
		super(props);
		this.state = {AB: '', Runs: 0, Hits: '', Strikeouts: 0, RBI: 0}
	}
	
	handleFirstName(event) {
		this.setState({value: event.target.value});
	}
	
	render() {
		
		
		var Style = {type: "text", name: "number", height: '39px', width: "15px"}
		
			  			
		return(	
				<form>
					<label>
						<div>
							<span>
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
						<div>
							<span>
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
						<div>
							<span>
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
								<input style={Style} />
							</span>
						</div>
					</label>
				</form>
		);
	}
}


export class Player extends Component {
	
	constructor(props) {
		super(props);
		this.state = {name: '', number: 0, position: '', inning: 0}
	}
	
	handleFirstName(event) {
		this.setState({value: event.target.value});
	}
	
	render() {
		
		var formStyle = {float: 'left'}
		
		var NotName = {type: "text", name: "number", height: '39px', width: "12px"}
		var Name = {type: "text", name: "name", height: '39px', width: "72px"}				  
		return(	
			 <form style = {formStyle}>
					<label>
						<div>
							<span>
								<input style={NotName} />
								<input style={Name} />
								<input style={NotName} />
								<input style={NotName} />
							</span>
						</div>
						<div>
							<span>
								<input style={NotName} />
								<input style={Name} />
								<input style={NotName} />
								<input style={NotName} />
							</span>
						</div>
						<div>
						<span>
							<input style={NotName} />
							<input style={Name} />
							<input style={NotName} />
							<input style={NotName} />
						</span>
						</div>
					</label>
			  </form>
		);
	}
}



export class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {pitchCount: 0}
		this.incrementCount = this.incrementCount.bind(this);
		this.decrementCount = this.decrementCount.bind(this);
		this.decrementFouls = this.decrementFouls.bind(this);
	}
	
	incrementCount() {
		this.setState((prevState, props) => ({
			pitchCount: prevState.pitchCount + 1,
		}));
		
	}
	
	decrementCount() {
		this.setState((prevState, props) => ({
			pitchCount: prevState.pitchCount - 1,
		}));
		
	}
	
	decrementFouls() {
		this.setState((prevState, props) => ({
			pitchCount: prevState.pitchCount - 20,
		}));
		
	}
	
	render() {
		var buttonStyle = {width: '125px', height: '135px', backgroundColor: '#FFFFFF'}
		var fieldStyle = {position: 'relative', bottom: '0'};
		var boxesStyle = {position: 'relative', top: '1', left: '30'};
		var strikeBoxStyle = {position: 'relative', top: '2', right: '2'}
		var ballBoxStyle = {position: 'relative', top: '1', left: '2'}
		var FoulCounterStyle = {position: 'relative', left: '50'};
		
		return(
		<button style = {buttonStyle}>
			<Field style = {fieldStyle}></Field>
			<div style = {boxesStyle}>
				<div style = {strikeBoxStyle} >
				<FoulCounter style = {FoulCounterStyle} pitchCount = {this.state.pitchCount} incrementCount = {this.incrementCount} decrementCount = {this.decrementFouls}></FoulCounter>
				<StrikeCounter pitchCount = {this.state.pitchCount} isStrike = 'true' incrementCount = {this.incrementCount} decrementCount = {this.decrementCount}></StrikeCounter>
				<StrikeCounter pitchCount = {this.state.pitchCount} isStrike = 'true' incrementCount = {this.incrementCount} decrementCount = {this.decrementCount}></StrikeCounter>
				</div>
				
				<div style = {ballBoxStyle}>
				<StrikeCounter pitchCount = {this.state.pitchCount} incrementCount = {this.incrementCount} decrementCount = {this.decrementCount}></StrikeCounter>
				<StrikeCounter pitchCount = {this.state.pitchCount} incrementCount = {this.incrementCount} decrementCount = {this.decrementCount}></StrikeCounter>
				<StrikeCounter pitchCount = {this.state.pitchCount} incrementCount = {this.incrementCount} decrementCount = {this.decrementCount}></StrikeCounter>
				</div>
			</div>
		</button>
		);
	}
}

export class FoulCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {clickNumber: 0, pitchCount: null}
	    this.updateCount = this.updateCount.bind(this);
		this.updatebothIncrement = this.updatebothIncrement.bind(this);
		this.updatebothDecrement = this.updatebothDecrement.bind(this);
	}
	

	
	updateCount() {
		this.setState((prevState, props) => ({
		clickNumber: prevState.clickNumber == 20 ? 0:prevState.clickNumber + 1,
		pitchCount: this.props.pitchCount + 1, //HACKY
		}));
	}
	
	updatebothIncrement() {
		this.updateCount();
		this.props.incrementCount();
	}
	
	updatebothDecrement() {
		this.updateCount();
		this.props.decrementCount();
	}
	
	render() {
		var boxStyle = {backgroundColor: '#FFFFFF', outline: 'none', width: '28', height: '20', textAlign: 'center', border: 'none'};
		var elem;
		
		if(this.state.clickNumber == 0) {
			elem = <button style = {boxStyle}  onClick = {this.updatebothIncrement}>+</button>
		}
		else if(0 < this.state.clickNumber && this.state.clickNumber < 20) {
			elem = <button style = {boxStyle}  onClick = {this.updatebothIncrement}>{this.state.clickNumber}+</button>
		}
		else if(this.state.clickNumber == 20) {
			elem = <button style = {boxStyle}  onClick = {this.updatebothDecrement}>20+</button>
		}

		
		return(
			elem
		);
	}
}

export class StrikeCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {clickNumber: 0, pitchCount: null}
	    this.updateCount = this.updateCount.bind(this);
		this.updatebothIncrement = this.updatebothIncrement.bind(this);
		this.updatebothDecrement = this.updatebothDecrement.bind(this);
	}
	

	
	updateCount() {
		this.setState((prevState, props) => ({
		clickNumber: (prevState.clickNumber == 3  && this.props.isStrike)  || (prevState.clickNumber == 1  && !this.props.isStrike)? 0:prevState.clickNumber + 1,
		pitchCount: this.props.pitchCount + 1, //HACKY
		}));
	}
	
	updatebothIncrement() {
		this.updateCount();
		this.props.incrementCount();
	}
	
	updatebothDecrement() {
		this.updateCount();
		this.props.decrementCount();
	}
	
	render() {
		var boxStyle = {backgroundColor: '#FFFFFF', outline: 'none', width: '20', height: '20'};
		var elem;
		
		if(this.props.isStrike) {
			if(this.state.clickNumber == 0) {
				elem = <button style = {boxStyle}  onClick = {this.updatebothIncrement}>/</button>
			}
			else if(this.state.clickNumber == 1) {
				elem = <button style = {boxStyle}  onClick = {this.updateCount}>{this.state.pitchCount}</button>
			}
			else if(this.state.clickNumber == 2) {
				elem = <button style = {boxStyle}  onClick = {this.updateCount}>C</button>
			}
			else if(this.state.clickNumber == 3) {
				elem = <button style = {boxStyle}  onClick = {this.updatebothDecrement}>F</button>
			}
			else {
				elem = <button style = {boxStyle}  onClick = {this.updateCount}>/</button>
			}
		}
		else {
			if(this.state.clickNumber == 0) {
				elem = <button style = {boxStyle}  onClick = {this.updatebothIncrement}>/</button>
			}
			else if(this.state.clickNumber == 1) {
				elem = <button style = {boxStyle}  onClick = {this.updatebothDecrement}>{this.state.pitchCount}</button>
			}
			else {
				elem = <button style = {boxStyle}  onClick = {this.updateCount}>/</button>
			}
		}
		
		return(
			elem
		);
	}
}

export class Field extends Component {
	constructor(props) {
		super(props);
		this.state = {clickNumber: 0}
	    this.updateImage = this.updateImage.bind(this);
	}
	

	
	updateImage() {
		this.setState((prevState, props) => ({
			clickNumber: prevState.clickNumber == 4 ? 0:prevState.clickNumber + 1, 
		}));
		
	}
	
	render() {
		
		var imageStyle = {width: '100', height: '90'}
		var viewStyle = {}
		var elem;
		if(this.state.clickNumber == 0) {
			elem = <TouchableWithoutFeedback   onPress = {this.updateImage}><View style = {viewStyle}><Image style={imageStyle} source={require('./Empty.png')} /></View></TouchableWithoutFeedback >
		}
		else if(this.state.clickNumber == 1) {
			elem = <TouchableWithoutFeedback  onPress = {this.updateImage}><View style = {viewStyle}><Image style={imageStyle} source={require('./First.png')} /></View></TouchableWithoutFeedback >
		}
		else if(this.state.clickNumber == 2) {
			elem = <TouchableWithoutFeedback  onPress = {this.updateImage}><View style = {viewStyle}><Image style={imageStyle} source={require('./Second.png')} /></View></TouchableWithoutFeedback >
		}
		else if(this.state.clickNumber == 3) {
			elem = <TouchableWithoutFeedback  onPress = {this.updateImage}><View style = {viewStyle}><Image style={imageStyle} source={require('./Third.png')} /></View></TouchableWithoutFeedback >
		}
		else if(this.state.clickNumber == 4) {
			elem = <TouchableWithoutFeedback  onPress = {this.updateImage}><View style = {viewStyle}><Image style={imageStyle} source={require('./Home.png')} /></View></TouchableWithoutFeedback >
		}
		else {
			elem = <TouchableWithoutFeedback  onPress = {this.updateImage}><View style = {viewStyle}><Image style={imageStyle} source={require('./Empty.png')} /></View></TouchableWithoutFeedback >
		}
		return(
			elem
		);
	}
}
