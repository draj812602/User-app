/** @format */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const LoginRoute = ({ component: Component, ...rest }) => {
	const token = localStorage.getItem('JWT_Token');

	return (
		<Route
			{...rest}
			render={(props) => {
				if (token) {
					return <Redirect to="/partner_home" />;
				} else {
					return <Component {...props} />;
				}
			}}
		/>
	);
};
