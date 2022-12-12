/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import LoginForm from './CommonLoginForm';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { PARTNERLOGIN } from '../../Mutations/index';

import logo from '../../Images/wiznet_logo.png';

import { AuthContext } from '../../Context/auth';

function PartnersLogin() {
	const context = useContext(AuthContext);
	const history = useHistory();
	const [signIn, { loading }] = useMutation(PARTNERLOGIN, {
		update(proxy, result) {
			let res = result.data.partnerLogin;
			context.login(res);

			window.location.href = '/partner_home';
		},
	});
	const LoginPartnerFun = async (e) => {
		let { email, password } = e;
		try {
			await signIn({ variables: { email, password } });
		} catch (err) {
			//	console.log(err);
		}
	};
	const partnersSignUp = () => {
		history.push('partner_signup');
	};

	return (
		<div>
			<div className="row pl-4 pr-5 pt-4 no-gutters">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				</div>
			</div>

			<div className="containerLogin">
				<div className="container">
				<div class="row justify-content-center align-items-center">
				<div>
						<div className="fs-5 text-white row justify-content-center align-items-center ">Log in into your account</div>
						<div className="text-white fs-2 ">Welcome to  <img src={logo} alt="Images" className="logo_login"/></div>
					</div>
				</div>

				<LoginForm
					LoginPartnerFun={LoginPartnerFun}
					loading={loading}
					role="partnerLogin"
				/>
				<div class="row justify-content-center align-items-center ">
				<div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
					<div className="fs-5 text-white ">
						Don’t have an account?
						<a className="fs-5 text-white ml-1" onClick={partnersSignUp}>
							Sign up
						</a>
					</div>
					</div>
					</div>
					<div class="row justify-content-center align-items-center ">
							<img src={logo} alt="Images" className="logo_footer" />
						</div>
				
			</div>
			</div>
		</div>
	);
}

export default PartnersLogin;
