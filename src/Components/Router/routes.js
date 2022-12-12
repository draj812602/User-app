/** @format */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPartner from '../../View/Authentication.js/LoginPartner';
import SignUpPartner from '../../View/Authentication.js/PartnersSignup';
import welcomePartner from '../../View/Others/Partnerhome';
import MyApplication from '../../View/Others/MyApplication';
import ForgotPassworduser from '../../View/Authentication.js/ForgotPassword';
import ResetPassword from '../../View/Authentication.js/ResetPassword';
import Linkexpiredview from '../../View/Authentication.js/Linkexpiredpage';
import EmailVarification from '../../View/Authentication.js/EmailVarificationPage';

import { AuthRoute } from './authRoute';
import { LoginRoute } from './LoginRoute';

function Rout(props) {
	return (
		<div>
			<div>
				<Switch>
					
					<LoginRoute exact path="/" component={LoginPartner} />
					<LoginRoute path="/partner_signup" component={SignUpPartner} />
					<AuthRoute path="/partner_home" component={welcomePartner} />
					<AuthRoute path="/myApplication" component={MyApplication} />

					<LoginRoute
						exact
						path="/reset-password"
						component={ForgotPassworduser}
					/>
					
					<LoginRoute
						path="/email_varification"
						component={EmailVarification}
					/>
					<LoginRoute
						path="/reset-password/:token_id"
						component={ResetPassword}
					/>
					<LoginRoute path="/link_expired" component={Linkexpiredview} />
				</Switch>
			</div>
		</div>
	);
}

export default Rout;
