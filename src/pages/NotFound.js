import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class NotFound extends Component {

	render() {
		return <div className="exception-body notfound">
			<div className="exception-panel">
				<div className="exception-content">
					<img src="assets/layout/images/pages/icon-404.svg" alt="sigma"/>
						<h1>Page Not Found</h1>
						<p>Requested resource is not available.</p>

					<Button label="Go To Dashboard" onClick={() => {window.location = "/#"}} />
				</div>
			</div>
		</div>
	}
}