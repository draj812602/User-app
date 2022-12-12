import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../Images/wiznet_logo.png';
import { useHistory } from 'react-router-dom';
import GoBack from '../GoBack';

// import Jwt_Decode from 'jwt-decode';

function VarificationPage(props) {
	const { handleSubmit } = useForm();
	const history = useHistory();
	const back = () => {
		history.push('/reset-password');
	};
	const EmailSubmission = () => {
		history.push('/');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(EmailSubmission)}>
				<div>
					<div className="row pl-4 pr-5 pt-4 no-gutters">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						</div>
					</div>

					<div className="containerLogin ">
						<div className="row pb-3 no-gutters">
							<div className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 offset-lg-4 offset-md-3 offset-sm-4 ">
								<GoBack Goback={back} />
								<div className="text-white fs-3">Check your mailbox</div>
								<div className="fs-6 text-info">
									We've sent password reset instructions to your email address.
									If no email is received within ten minutes, check that the
									submitted address is correct.
								</div>

								<div class="">
									<div className="">
										<div className="form-group pt-3">
											<button
												className="btn btn-auth btn-block"
												disabled={props.loading}>
												Sign in
												{props.loading && (
													<span className="spinner-border float-right"></span>
												)}
											</button>
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

export default VarificationPage;
