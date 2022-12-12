import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../Images/wiznet_logo.png';
import { useHistory } from 'react-router-dom';
import GoBack from '../GoBack';
import { useMutation } from '@apollo/react-hooks';
import { FORGOTPASSWORDLINK } from '../../Mutations/index';

function ForgotPassword(props) {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const back = () => {
		history.push('/');
	};
	const [emailverify, { loading }] = useMutation(FORGOTPASSWORDLINK, {
		update(proxy, result) {},
	});

	const Emailverification = async (e) => {
		let { email } = e;
		try {
			await emailverify({
				variables: { email },
			});
			history.push('/email_varification');
		} catch (error) {
			//console.log(error);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit(Emailverification)}>
				<div>
					<div className="row pl-4 pr-5 pt-4 no-gutters">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						</div>
					</div>

					<div className="containerLogin offset-md-1">
						<div className="row pb-3 no-gutters">
							<div className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 offset-lg-4 offset-md-3 offset-sm-4">
								<GoBack Goback={back} />
								<div className="text-white fs-4 font-weight-bold mt-2 ">
									Forgot password
								</div>
								<div className="fs-5 mt-2 text-info">
									Enter your registered email address and we’ll send you the
									instructions to reset your password.
								</div>

								<div class="">
									<div className="mt-2">
										<div className="form-group">
											<label className="label text-white" htmlFor="email">
												Email id
											</label>
											<input
												type="text"
												name="email"
												id="email"
												className={
													errors.email
														? 'bg-white form-control error_input'
														: 'bg-white form-control'
												}
												placeholder="Email ID"
												ref={register({
													required: 'Email ID is required',
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: 'Invalid email address',
													},
												})}
											/>
											{errors.email && (
												<div>
													<span className="text-error">
														{errors.email.message}
													</span>
												</div>
											)}
										</div>
										<div className="form-group">
											<button
												className="btn btn-auth btn-block"
												disabled={loading}>
												Reset password
												{loading && (
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

export default ForgotPassword;
