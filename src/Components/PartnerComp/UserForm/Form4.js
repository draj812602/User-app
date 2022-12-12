import React from 'react';

function Form4({ register, errors, defaultValues,toInputUppercase }) {
	
	return (
		<div>
			<div className="row">
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="contact_person_name">
						Contact person name
					</label>
					<input
						type="text"
						name="contact_person_name"
						id="contact_person_name"
						onInput={toInputUppercase}
						className={
							errors.contact_person_name
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={defaultValues && defaultValues.contact_person_name}
						placeholder="Contact person's name"
						ref={register({
							required: "Contact person's name is required",
						})}
					/>

					{errors.contact_person_name && (
						<div>
							<span className="text-error">
								{errors.contact_person_name.message}
							</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="email_id">
						Email ID
					</label>
					<input
						type="text"
						name="email_id"
						id="email_id"
						className={
							errors.email_id
								? 'form-control error_input '
								: 'form-control '
						}
						defaultValue={defaultValues && defaultValues.email_id}
						//value="draj.8126@gmail.com"
						placeholder="Email ID"
						ref={register({
							required: 'Email ID is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email ID',
							},
						})}
					/>

					{errors.email_id && (
						<div>
							<span className="text-error">{errors.email_id.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="contact_phone_no">
						Phone number
					</label>
					<input
						type="text"
						name="contact_phone_no"
						id="contact_phone_no"
						className={
							errors.contact_phone_no
								? 'form-control error_input '
								: 'form-control '
						}
						defaultValue={defaultValues && defaultValues.contact_phone_no}
						//value="1234567890"
						placeholder="Phone number"
						ref={register({
							required: 'Phone numbar required',
							pattern: {
								value: /[0-9]{10}/,
								message: 'Invalid phone no',
							},
						})}
					/>

					{errors.contact_phone_no && (
						<div>
							<span className="text-error">
								{errors.contact_phone_no.message}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Form4;
