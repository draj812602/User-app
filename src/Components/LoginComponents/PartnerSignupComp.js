/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import LoginForm from './CommonLoginForm';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { REGESTRATION } from '../../Mutations/index';

import logo from '../../Images/wiznet_logo.png';

import { AuthContext } from '../../Context/auth';

function PartnerSignupComp() {
	const context = useContext(AuthContext);
	const history = useHistory();
	const [signUp, { loading }] = useMutation(REGESTRATION, {
		update(proxy, result) {
			let res = result.data.userPartnerRegister;
			context.login(res);

			window.location.href = '/partner_home';
		},
	});
	const PartnersSignUp = async (e) => {
		let { email, password } = e;
		try {
			await signUp({ variables: { email, password } });
		} catch (err) {
			//console.log(err);
		}
	};
	const partnersLogin = () => {
		history.push('./');
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
					<div className="fs-5 text-white ">
					Have IOT devices but don’t have support to manage them?
					</div>
					<div className="text-white fs-2 row justify-content-center align-items-center mt-1 ">Partner with <img src={logo} alt="Images" className="logo_login"/>
					</div>
				</div>
					</div>
					
	
			
				<LoginForm LoginPartnerFun={PartnersSignUp} loading={loading} />
				<div class="row justify-content-center align-items-center ">
				<div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
				<div className="fs-5 text-white ">Already have an account?
					<a className="fs-5 text-white ml-1" onClick={partnersLogin}>
						 Sign in
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

export default PartnerSignupComp;
