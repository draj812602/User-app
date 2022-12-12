import React from 'react';

function loader() {
	return (
		<div className="loading-container">
			<div className="loading"></div>
			<div id="loading-text" className="text-primary font-weight-bolder fs-7">
				Loading . . .
			</div>
		</div>
	);
}
export default loader;
