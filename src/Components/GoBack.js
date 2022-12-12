import React from 'react';

function GoBack({ Goback }) {
	return (
		<div>
			<span
				className="goBack_class text-dark font-weight-bold fs-4 mb-0"
				onClick={Goback}>
				<i className="ri-arrow-left-line mr-1 goBackIcon"></i>
				Back
			</span>
		</div>
	);
}

export default GoBack;
