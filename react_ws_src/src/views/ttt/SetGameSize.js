import React, {Component} from 'react'

export default class SetGameSize extends Component {

	constructor (props) {
		super(props)

		this.state = {}

		this.handleSizeType = this.handleSizeType.bind(this);
	}

	handleSizeType(e, size) {
		e.preventDefault();

		this.props.onSetSize(size);
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetGameSize'>

				<h1>Choose game size</h1>

				<button type='button' onClick={(e) => this.handleSizeType(e, 3)} className='button'><span>3x3</span></button>
				
				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='button' onClick={(e) => this.handleSizeType(e, 5)} className='button'><span>5x5</span></button>

				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='button' onClick={(e) => this.handleSizeType(e, 7)} className='button'><span>7x7</span></button>

			</div>
		)
	}

}
