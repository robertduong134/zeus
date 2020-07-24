import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class Access extends Component {

	render() {
		return <div className="exception-body accessdenied">
			<div className="exception-panel">
				<div className="exception-content">
					<img src="assets/layout/images/pages/icon-access.svg" alt="sigma"/>
						<h1>Access Denied</h1>
						<p>You do not have the necessary permissons.</p>

						<Button label="Go To Dashboard" onClick={() => {window.location = "/#"}} />
				</div>
			</div>
		</div>
	}
}