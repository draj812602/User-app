import React from 'react';
import styles from '../../../Styles/Styles';
import Select from 'react-select';

function Form3({
	register,
	errors,
	defaultValues,
	triggerCheckbox,
	checkedBox,
	toInputUppercase,
	ChangeHandlerP,
	valueCountryP,
	Countrylist,
	valueCountry,
	control,
	Controller,
}) {
	return (
		<div>
			<div className="row">
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							onChange={(e) => triggerCheckbox(e.target.defaultValue)}
							defaultChecked={checkedBox}
							id="flexCheckChecked"
						/>
						<label class="form-check-label" htmlFor="flexCheckChecked">
							Same as registered address
						</label>
					</div>
					<label className="label mt-3" htmlFor="paddress">
						Address
					</label>
					<input
						type="text"
						name="paddress"
						id="paddress"
						onInput={toInputUppercase}
						className={
							errors.paddress
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={
							checkedBox === true
								? defaultValues.address
								: defaultValues.paddress
						}
						placeholder="Address"
						ref={register({
							required: 'Address is required',
						})}
					/>

					{errors.paddress && (
						<div>
							<span className="text-error">{errors.paddress.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="pcountry">
						Country
					</label>
					{console.log(typeof checkedBox)}
					{checkedBox && (
						<Controller
							name="pcountry"
							as={Select}
							defaultValue={defaultValues.country}
							options={Countrylist}
							control={control}
							rules={{ required: true }}
							styles={styles}
						/>
					)}{' '}
					{!checkedBox && (
						<Controller
							name="pcountry"
							as={Select}
							defaultValue={defaultValues && defaultValues.pcountry}
							options={Countrylist}
							control={control}
							rules={{ required: true }}
							styles={styles}
						/>
					)}
					{errors.pcountry && errors.pcountry.type === 'required' ? (
						<div>
							<span className="text-error">Please select a country</span>
						</div>
					) : null}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="pstate">
						State
					</label>
					<input
						type="text"
						name="pstate"
						id="pstate"
						onInput={toInputUppercase}
						className={
							errors.pstate
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={
							checkedBox === true ? defaultValues.state : defaultValues.pstate
						}
						placeholder="State"
						ref={register({
							required: 'State is required',
						})}
					/>

					{errors.pstate && (
						<div>
							<span className="text-error">{errors.pstate.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="pcity">
						City
					</label>
					<input
						type="text"
						name="pcity"
						id="pcity"
						onInput={toInputUppercase}
						className={
							errors.pcity
								? 'form-control error_input '
								: 'form-control  text-capitalize'
						}
						defaultValue={
							checkedBox === true ? defaultValues.city : defaultValues.pstate
						}
						placeholder="City"
						ref={register({
							required: 'City is required',
						})}
					/>

					{errors.pcity && (
						<div>
							<span className="text-error">{errors.pcity.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<label className="label" htmlFor="ppincode">
						Pincode
					</label>
					<input
						type="text"
						name="ppincode"
						id="ppincode"
						className={
							errors.ppincode ? 'form-control error_input ' : 'form-control '
						}
						defaultValue={
							checkedBox === true
								? defaultValues.pincode
								: defaultValues.ppincode
						}
						placeholder="Pincode"
						ref={register({
							required: 'Pincode is required',
						})}
					/>

					{errors.ppincode && (
						<div>
							<span className="text-error">{errors.ppincode.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="pphone_no">
						Phone no
					</label>
					<input
						type="tel"
						name="pphone_no"
						id="pphone_no"
						className={
							errors.pphone_no ? 'form-control error_input ' : 'form-control '
						}
						defaultValue={
							checkedBox === true
								? defaultValues.phone_no
								: defaultValues.pphone_no
						}
						//value="1234567890"
						placeholder="Phone number"
						ref={register({
							required: 'Phone number is required',
							pattern: {
								defaultValue: /[0-9]{10}/,
								message: 'Invalid phone no',
							},
						})}
					/>

					{errors.pphone_no && (
						<div>
							<span className="text-error">{errors.pphone_no.message}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Form3;
