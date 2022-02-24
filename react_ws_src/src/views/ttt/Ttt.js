import React, { Component} from 'react'
import { Link } from 'react-router'

import SetName from './SetName'
import SetGameType from './SetGameType'
import SetGameSize from './SetGameSize'

import GameMain from './GameMain'

export default class Ttt extends Component {

	constructor (props) {
		super(props)

		this.state = {
			game_step: this.set_game_step(),
			game_size: 3,
			game_type: null,
		}
	}

//	------------------------	------------------------	------------------------

	render () {

		const {game_step} = this.state


		return (
			<section id='TTT_game'>
				<div id='page-container'>
					{game_step == 'set_name' && <SetName 
														onSetName={this.saveUserName.bind(this)} 
												/>}

					{game_step != 'set_name' && 
						<div>
							<h2>Welcome, {app.settings.curr_user.name}</h2>
						</div>
					}

					{game_step == 'set_game_type' && <SetGameType 
														onSetType={this.saveGameType.bind(this)} 
													/>}
					{game_step == 'set_game_size' && <SetGameSize 
														onSetSize={this.saveGameSize.bind(this)} 
													/>}
					{game_step == 'start_game' && <GameMain 
														game_size={this.state.game_size}
														game_type={this.state.game_type}
														onEndGame={this.gameEnd.bind(this)} 
													/>}

				</div>
			</section>
		)
	}

//	------------------------	------------------------	------------------------

	saveUserName (n) {
		app.settings.curr_user = {}
		app.settings.curr_user.name = n

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	saveGameType (t) {
		this.state.game_type = t

		if (t === 'live') {
			this.state.game_size = 3;
		}

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	saveGameSize (t) {
		this.state.game_size = t;

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	gameEnd (t) {
		// Reset both game size & type and force them to select game size again
		this.setState({
			game_step: 'set_game_type',
			game_size: null,
			game_type: null,
		});
	}

//	------------------------	------------------------	------------------------
//	------------------------	------------------------	------------------------

	upd_game_step () {

		this.setState({
			game_step: this.set_game_step()
		})
	}

//	------------------------	------------------------	------------------------

	set_game_step () {

		if (!app.settings.curr_user || !app.settings.curr_user.name)
			return 'set_name'
		else if (!this.state.game_type)
			return 'set_game_type'
		else if (this.state.game_type && this.state.game_type === 'comp' && !this.state.game_size)
			return 'set_game_size'
		else
			return 'start_game'
	}

}

//	------------------------	------------------------	------------------------

Ttt.propTypes = {
	params: React.PropTypes.any
}

Ttt.contextTypes = {
  router: React.PropTypes.object.isRequired
}