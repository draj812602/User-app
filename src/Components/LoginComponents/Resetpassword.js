import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

function ForgotPassword(props) {
	const { register, handleSubmit, errors, watch } = useForm();

	const password = useRef({});
	password.current = watch('password', '');
	return (
		<div>
			<form onSubmit={handleSubmit(props.ChangePassword)}>
				<div>
					<div className="row pl-4 pr-5 pt-4 no-gutters">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						</div>
					</div>

					<div className="containerLogin ">
						<div className="row pb-3 no-gutters">
							<div className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 offset-lg-4 offset-md-3 offset-sm-4 ">
								<div className="text-white fs-4 font-weight-bold">Choose a new password</div>
							
						<div class="">
							<div className="mt-3">
								<div className="form-group">
									<label className="label text-white" htmlFor="password">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										className={
											errors.password
												? 'form-control error_input '
												: 'form-control '
										}
										placeholder="New password"
										ref={register({
											required: 'New password is required',
											// pattern: {
											//     value: /^[a-z0-9_]{8}$/i,

											//     message: 'min 8 characters',

											// },
										})}
									/>

									{errors.password && (
										<div>
											<span className="text-error">
												{errors.password.message}
											</span>
										</div>
									)}
									
								</div>
								<div className="form-group">
									<label className="label text-white" htmlFor="confirmPass">
										Confirm password
									</label>
									<input
										type="password"
										name="confirmPass"
										id="confirmPass"
										className={
											errors.confirmPass
												? 'form-control error_input '
												: 'form-control '
										}
										placeholder="Confirm new password"
										ref={register({
											validate: (value) =>
												value === password.current ||
												'The passwords do not match',
										})}
									/>

									{errors.confirmPass && (
										<div>
											<span className="text-error">
												{errors.confirmPass.message}
											</span>
										</div>
									)}
								</div>
								<div className="form-group pt-3">
									<button
										className="btn btn-auth btn-block"
										disabled={props.loading}>
										Submit
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

export default ForgotPassword;
