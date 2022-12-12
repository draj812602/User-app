/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../Images/wiznet_logo.png';
import { useHistory } from 'react-router-dom';

function Linkexpired(props) {
	const { handleSubmit } = useForm();
	const history = useHistory();

	const Forgotpassword = () => {
		history.push('reset-password');
	};
	const partnersLoginpage = () => {
		history.push('/');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(Forgotpassword)}>
				<div>
					<div className="row pl-4 pr-5 pt-4 no-gutters">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						</div>
					</div>

					<div className="containerLogin ">
						<div className="row pb-3 no-gutters">
							<div className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 offset-lg-4 offset-md-3 offset-sm-4 ">
								<div className="text-white fs-3 mb-3">The link has expired!</div>
								<div className="fs-6 text-info">
									The link you are trying to access has expired. Please try to
									repeat the process to reset your password.
								</div>
							
						<div class="">
							<div className="">
								<div className="form-group pt-3">
									<button
										className="btn btn-auth btn-block"
										disabled={props.loading}>
										Forgot password
										{props.loading && (
											<span className="spinner-border float-right"></span>
										)}
									</button>
								</div>
								<div className="fs-5 text-white">Go back to
								<a className="fs-5 text-white ml-2" onClick={partnersLoginpage}>
									 sign in
								</a>
								</div>
							</div>
						</div>
					</div>
					</div>
						</div>
				</div>
			</form>
		</div>
	);
}

export default Linkexpired;
