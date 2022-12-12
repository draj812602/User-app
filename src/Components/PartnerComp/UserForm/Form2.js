import React from 'react';
import styles from '../../../Styles/Styles';

import Select from 'react-select';

function Form2({
	register,
	errors,
	defaultValues,
	toInputUppercase,
	ChangeHandler,
	valueCountry,
	Countrylist,
	control,
	Controller,
}) {
	return (
		<div>
			<div className="row">
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="address">
						Address
					</label>
					<input
						type="text"
						name="address"
						id="address"
						onInput={toInputUppercase}
						className={
							errors.address
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={defaultValues && defaultValues.address}
						placeholder="Address"
						ref={register({
							required: 'Address is required',
						})}
					/>

					{errors.address && (
						<div>
							<span className="text-error">{errors.address.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="country">
						Country
					</label>

					<Controller
						name="country"
						as={Select}
						defaultValue={defaultValues && defaultValues.country}
						options={Countrylist}
						control={control}
						rules={{ required: true }}
						styles={styles}
					/>

					{errors.country && errors.country.type === 'required' ? (
						<div>
							<span className="text-error">Please select a country</span>
						</div>
					) : null}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="state">
						State
					</label>
					<input
						type="text"
						name="state"
						id="state"
						onInput={toInputUppercase}
						className={
							errors.state
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={defaultValues && defaultValues.state}
						placeholder="State"
						ref={register({
							required: 'State is required',
						})}
					/>

					{errors.state && (
						<div>
							<span className="text-error">{errors.state.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="city">
						City
					</label>
					<input
						type="text"
						name="city"
						id="city"
						onInput={toInputUppercase}
						className={
							errors.city
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={defaultValues && defaultValues.city}
						placeholder="City"
						ref={register({
							required: 'City is required',
						})}
					/>

					{errors.city && (
						<div>
							<span className="text-error">{errors.city.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="pincode">
						Pincode
					</label>
					<input
						type="text"
						name="pincode"
						id="pincode"
						className={
							errors.pincode ? 'form-control error_input ' : 'form-control '
						}
						defaultValue={defaultValues && defaultValues.pincode}
						placeholder="Pincode"
						ref={register({
							required: 'Pincode is required',
						})}
					/>

					{errors.pincode && (
						<div>
							<span className="text-error">{errors.pincode.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="phone_no">
						Phone no
					</label>
					<input
						type="tel"
						name="phone_no"
						id="phone_no"
						className={
							errors.phone_no ? 'form-control error_input ' : 'form-control '
						}
						defaultValue={defaultValues && defaultValues.phone_no}
						//value="1234567890"
						placeholder="Phone number"
						ref={register({
							required: 'Phone number is required',
							pattern: {
								value: /[0-9]{10}/,
								message: 'Invalid phone no',
							},
						})}
					/>

					{errors.phone_no && (
						<div>
							<span className="text-error">{errors.phone_no.message}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Form2;
