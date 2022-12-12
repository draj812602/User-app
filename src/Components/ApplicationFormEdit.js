import React, { useState, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Select from 'react-select';
import countryList from 'react-select-country-list';
import styles from '../Styles/Styles';

function ApplicationFormEdit({
	data,
	submitApplication,
	cancelClick,
	rejectedData,
}) {
	const { register, errors, handleSubmit, control } = useForm();
	const [inputList, setInputList] = useState(data);
	const [valueCountry, setCountryValue] = useState({
		label: data.country.label,
		value: data.country.value,
	});
	const [valueCountryp, setCountryValuep] = useState({
		label: data.pcountry.label,
		value: data.pcountry.value,
	});
	const options = useMemo(() => countryList().getData(), []);

	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
	};
	return (
		<div className="mt-3">
			<div>
				<form onSubmit={handleSubmit(submitApplication)}>
					<div className="d-flex">
						<div className="ml-auto mr-4 btn_group_editForm">
							<button
								className="btn btn-secondary"
								type="button"
								onClick={cancelClick}>
								Cancel
							</button>
							<button className="btn btn-primary ml-2"> Reapply</button>
						</div>
					</div>
					<div className="alert alert-danger mr-4">
						<div className="fs-5 text-black-50 font-weight-bold mb-1">
							Rejection reason
						</div>
						<div className="fs-6 mb-3">{rejectedData.reject_reason}</div>
						<div className="fs-5 text-black-50 font-weight-bold mb-1">
							Description
						</div>
						<div className="fs-6">{rejectedData.reject_description}</div>
					</div>
					<div className="fs-4 text-primary my-3">Basic information</div>
					<div className="row box_style no-gutters mr-4 px-3 pt-3 ">
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Full legal name</label>
							<input
								type="text"
								name="legal_name"
								className={
									errors.legal_name
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								defaultValue={inputList.legal_name}
								placeholder="Full legal name"
								ref={register({
									required: 'Legal name is required',
								})}
							/>

							{errors.legal_name && (
								<div>
									<span className="text-error">
										{errors.legal_name.message}
									</span>
								</div>
							)}
						</div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Webiste URL</label>
							<input
								type="text"
								name="website_url"
								className={
									errors.website_url
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								defaultValue={inputList.website_url}
								placeholder="Website URl"
								ref={register({
									required: 'Website URl is required',
								})}
							/>

							{errors.website_url && (
								<div>
									<span className="text-error">
										{errors.website_url.message}
									</span>
								</div>
							)}
						</div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Director/CEO name</label>
							<input
								type="text"
								name="director_ceo_name"
								className={
									errors.director_ceo_name
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Director/CEO name"
								defaultValue={inputList.director_ceo_name}
								ref={register({
									required: 'Director/CEO name is required',
								})}
							/>

							{errors.director_ceo_name && (
								<div>
									<span className="text-error">
										{errors.director_ceo_name.message}
									</span>
								</div>
							)}
						</div>
					</div>
					<div className="fs-4 text-primary my-3 mt-3">Registered address</div>
					<div className="row box_style no-gutters mr-4 px-3 pt-3">
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Address</label>
							<input
								type="text"
								name="address"
								className={
									errors.address
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Address"
								defaultValue={inputList.address}
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Pincode</label>
							<input
								type="text"
								name="pincode"
								className={
									errors.pincode
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Pincode"
								defaultValue={inputList.pincode}
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-6"></div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">City</label>
							<input
								type="text"
								name="city"
								className={
									errors.city
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="City"
								defaultValue={inputList.city}
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">State</label>
							<input
								type="text"
								name="state"
								className={
									errors.state
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="State"
								defaultValue={inputList.state}
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

						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Country</label>

							<Controller
								name="country"
								as={Select}
								defaultValue={valueCountry}
								options={options}
								control={control}
								styles={styles}
								rules={{ required: true }}
							/>

							{errors.country && errors.country.type === 'required' ? (
								<div>
									<span className="text-error">Please select a country</span>
								</div>
							) : null}
						</div>
						<div className="form-group col-12 sol-sm-12 col-md-0 col-lg-0 col-xl-3"></div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Phone number</label>
							<input
								type="text"
								name="phone_no"
								className={
									errors.phone_no
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Phone number"
								defaultValue={inputList.phone_no}
								ref={register({
									required: 'Phone number is required',
								})}
							/>

							{errors.phone_no && (
								<div>
									<span className="text-error">{errors.phone_no.message}</span>
								</div>
							)}
						</div>
					</div>
					<div className="fs-4 text-primary my-3 mt-3">Present address</div>
					<div className="row box_style no-gutters mr-4 px-3 pt-3 ">
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Address</label>
							<input
								type="text"
								name="paddress"
								className={
									errors.paddress
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Address"
								defaultValue={inputList.paddress}
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Pincode</label>
							<input
								type="text"
								name="ppincode"
								className={
									errors.ppincode
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Pincode"
								defaultValue={inputList.ppincode}
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
						<div className="form-group col-12 sol-sm-12 col-md-12 col-lg-12 col-xl-6"></div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">City</label>
							<input
								type="text"
								name="pcity"
								className={
									errors.pcity
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="City"
								defaultValue={inputList.pcity}
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">State</label>
							<input
								type="text"
								name="pstate"
								className={
									errors.pstate
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="State"
								defaultValue={inputList.pstate}
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Country</label>

							<Controller
								name="pcountry"
								as={Select}
								defaultValue={valueCountryp}
								options={options}
								control={control}
								styles={styles}
								rules={{ required: true }}
							/>

							{errors.pcountry && (
								<div>
									<span className="text-error">{errors.pcountry.message}</span>
								</div>
							)}
						</div>
						<div className="form-group col-12 sol-sm-12 col-md-0 col-lg-0 col-xl-3"></div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Phone number</label>
							<input
								type="text"
								name="pphone_no"
								className={
									errors.pphone_no
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Phone number"
								defaultValue={inputList.pphone_no}
								ref={register({
									required: 'Phone number is required',
								})}
							/>

							{errors.pphone_no && (
								<div>
									<span className="text-error">{errors.pphone_no.message}</span>
								</div>
							)}
						</div>
					</div>
					<div className="fs-4 text-primary my-3">Contact details</div>
					<div className="row box_style no-gutters mr-4 px-3 pt-3 ">
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Contact person name</label>
							<input
								type="text"
								name="contact_person_name"
								className={
									errors.contact_person_name
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Contact persone name"
								defaultValue={inputList.contact_person_name}
								ref={register({
									required: 'Contact persone name is required',
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
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Email ID</label>
							<input
								type="text"
								name="email_id"
								className={
									errors.email_id
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Emal ID"
								defaultValue={inputList.email_id}
								ref={register({
									required: 'Emal ID is required',
								})}
							/>

							{errors.email_id && (
								<div>
									<span className="text-error">{errors.email_id.message}</span>
								</div>
							)}
						</div>
						<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3 pr-md-4 pr-lg-4 pr-xl-4">
							<label className="label">Phone number</label>
							<input
								type="text"
								name="contact_phone_no"
								className={
									errors.contact_phone_no
										? 'form-control error_input '
										: 'form-control bg-input-color'
								}
								placeholder="Phone number"
								defaultValue={inputList.contact_phone_no}
								ref={register({
									required: 'Phone number is required',
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
				</form>
			</div>
		</div>
	);
}

export default ApplicationFormEdit;
