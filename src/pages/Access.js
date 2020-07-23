import React, {Component} from 'react';
import {Button} from "primereact/button";
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

export default class Access extends Component {

	render() {
		return <div className="exception-body accessdenied">
			<div className="exception-panel">
				<div className="exception-code">
					<img src="assets/layout/images/exception/401.svg" alt="sigma"/>
				</div>

				<div className="exception-detail">

					<div className="exception-icon">
						<VerifiedUserOutlinedIcon fontSize="large" />
					</div>
					<h1>ACCESS DENIED</h1>
					<p>Please contact the system administrator</p>

					<Button label="GO TO DASHBOARD" onClick={() => {window.location = "/#"}} />
				</div>
			</div>
		</div>
    }
}