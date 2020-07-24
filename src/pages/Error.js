import React, {Component} from 'react';
import {Button} from "primereact/button";

export default class Error extends Component {

	render() {
		return <div className="exception-body error">
			<div className="exception-panel">
				<div className="exception-content">
					<img src="assets/layout/images/pages/icon-error.svg" alt="sigma"/>
						<h1>Error Occured</h1>
						<p>Something went wrong.</p>

						<Button label="Go To Dashboard" onClick={() => {window.location = "/#"}} />
				</div>
			</div>
		</div>
	}
}