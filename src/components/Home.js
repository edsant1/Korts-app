import React, { Component } from 'react';
import { form, FormGroup, FormControl,ControlLabel } from 'react-bootstrap/lib';
//form is going to need name, email, phone #, referral!
//once form submits we switch out components shows a pending componenet
//once verified we send them email with link with username and password they
//sign in and answer the questionair, same pic background different form 
/** use neutral colors  */
class Home extends Component {
	render() {
		return(
			<div className="home-page-header row">
				<div className="hdr-ovrlay">
					<div className="signup-form">
						<form>
							<ControlLabel >Sign Up</ControlLabel>
							<FormControl
            		type="text"
            		placeholder="Email"
          			/>
								<FormControl
            		type="text"
            		placeholder="password"
          			/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
