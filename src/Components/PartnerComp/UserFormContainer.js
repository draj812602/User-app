import React, { useState, useMemo } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { FORMSUBMIT } from '../../Mutations';
import { PARTNERSTATUS } from '../../Queries';
import { useMutation } from '@apollo/react-hooks';

import Form1 from './UserForm/Form1';
import Form2 from './UserForm/Form2';
import Form3 from './UserForm/Form3';
import Form4 from './UserForm/Form4';

import Select from 'react-select';
import styles from '../../Styles/Styles.js';
import countryList from 'react-select-country-list';

import '../../Styles/progressStyle.css';

function UserFormContainer() {
	const [currentForm, setCurrentForm] = useState(0);
	const [Step1, setStep1] = useState('active');
	const [Step2, setStep2] = useState('inactive');
	const [Step3, setStep3] = useState('inactive');
	const [Step4, setStep4] = useState('inactive');

	// country list
	const [valueCountry, setCountryValue] = useState();
	const [valueCountryP, setCountryValueP] = useState();
	const Countrylist = useMemo(() => countryList().getData(), []);

	const [checkedBox, setcheckedBox] = useState(false);
	const [defaultValues, setDefaultValues] = useState({});
	const { register, triggerValidation, errors, getValues, control } = useForm();

	const [formSubmitFun, { loading: loadingStatus }] = useMutation(FORMSUBMIT, {
		update(proxy, result) {},
		refetchQueries: [
			{
				query: PARTNERSTATUS,
			},
		],
	});

	const ChangeHandler = (e) => {
		setCountryValue(e);
	};
	const ChangeHandlerP = (e) => {
		//console.log(e);
		setCountryValueP(e);
	};

	const triggerCheckbox = () => {
		setcheckedBox(!checkedBox);
	};
	const forms = [
		{
			fields: ['legal_name', 'website_url', 'director_ceo_name'],
			component: (register, errors, defaultValues) => (
				<Form1
					register={register}
					errors={errors}
					defaultValues={defaultValues}
					toInputUppercase={toInputUppercase}
				/>
			),
		},
		{
			fields: ['address', 'state', 'city', 'pincode', 'phone_no', 'country'],
			component: (register, errors, defaultValues) => (
				<Form2
					register={register}
					errors={errors}
					defaultValues={defaultValues}
					Countrylist={Countrylist}
					Select={Select}
					styles={styles}
					valueCountry={valueCountry}
					toInputUppercase={toInputUppercase}
					Controller={Controller}
					control={control}
				/>
			),
		},
		{
			fields: [
				'paddress',
				'pstate',
				'pcity',
				'ppincode',
				'pphone_no',
				'pcountry',
			],
			component: (register, errors, defaultValues) => (
				<Form3
					register={register}
					errors={errors}
					defaultValues={defaultValues}
					Countrylist={Countrylist}
					valueCountryP={valueCountryP}
					valueCountry={valueCountry}
					toInputUppercase={toInputUppercase}
					checkedBox={checkedBox}
					triggerCheckbox={triggerCheckbox}
					Select={Select}
					styles={styles}
					Controller={Controller}
					control={control}
				/>
			),
		},
		{
			fields: ['contact_person_name', 'email_id', 'contact_phone_no'],
			component: (register, errors, defaultValues) => (
				<Form4
					register={register}
					errors={errors}
					defaultValues={defaultValues}
					toInputUppercase={toInputUppercase}
				/>
			),
		},
	];

	const moveToPrevious = () => {
		setDefaultValues((prev) => ({ ...prev, ...getValues() }));

		if (currentForm === 1) {
			setStep1('active');
			setStep2('inactive');
			setStep3('inactive');
			setStep4('inactive');
		} else if (currentForm === 2) {
			setStep1('done');
			setStep2('active');
			setStep3('inactive');
			setStep4('inactive');
		} else if (currentForm === 3) {
			setStep1('done');
			setStep2('done');
			setStep3('active');
			setStep4('inactive');
		} else {
			setStep1('done');
			setStep2('done');
			setStep3('done');
			setStep4('active');
		}

		setCurrentForm(currentForm - 1);
	};

	const moveToNext = () => {
		setDefaultValues((prev) => ({ ...prev, ...getValues() }));
		triggerValidation(forms[currentForm].fields).then((valid) => {
			if (valid) {
				if (currentForm === 0) {
					setStep1('done');
					setStep2('active');
					setStep3('inactive');
					setStep4('inactive');
				} else if (currentForm === 1) {
					setStep1('done');
					setStep2('done');
					setStep3('active');
					setStep4('inactive');
				} else {
					/* 
				else if (currentForm === 2) {
					setStep1("done");
					setStep2("done");
					setStep3("done");
					setStep4("active");
				}
				*/
					setStep1('done');
					setStep2('done');
					setStep3('done');
					setStep4('active');
				}

				setCurrentForm(currentForm + 1);
			}
		});
	};

	const prevButton = currentForm !== 0;
	const nextButton = currentForm !== forms.length - 1;
	const handleSubmit = (e) => {
		setDefaultValues((prev) => ({ ...prev, ...getValues() }));
		triggerValidation(forms[currentForm].fields).then((valid) => {
			if (valid) {
				const wholeFormData = { ...defaultValues, ...getValues() };

				// wholeFormData.country = valueCountry;
				// if (valueCountryP === undefined) {
				// 	//console.log(valueCountryP);
				// 	wholeFormData.pcountry = valueCountry;
				// } else {
				// 	//console.log(valueCountryP);
				// 	wholeFormData.pcountry = valueCountryP;
				// }
				//console.log(JSON.stringify(wholeFormData));

				try {
					formSubmitFun({ variables: { formdata: wholeFormData } });
				} catch (error) {
					//console.log(error);
				}
			}
		});
		// console.log(e)
	};
	const toInputUppercase = (e) => {
		e.target.value =
			'' +
			e.target.value.slice(0, 1).toUpperCase() +
			e.target.value.slice(1, e.target.value.length);
		// console.log(e.target.value)
	};

	return (
		<div>
			<div className="row no-gutters mb-2">
				<ul className="d-flex align-self-stretch" id="progressbar">
					<li className={Step1}>
						Basic
						<br /> information
					</li>

					<li className={Step2}>
						Registered
						<br />
						address
					</li>

					<li className={Step3}>
						Present
						<br />
						address
					</li>
					<li className={Step4}>
						Contact
						<br />
						details
					</li>
				</ul>
			</div>

			{forms[currentForm].component(register, errors, defaultValues)}
			<div className="d-flex">
				{prevButton && (
					<button
						className="btn btn-light mt-4"
						type="button"
						disabled={loadingStatus}
						onClick={moveToPrevious}>
						Previous
					</button>
				)}
				{nextButton && (
					<button
						className="btn btn-primary ml-auto mt-4"
						type="button"
						onClick={moveToNext}>
						Next
					</button>
				)}

				{currentForm === 3 && (
					<button
						onClick={handleSubmit}
						className="btn btn-primary ml-auto mt-4"
						disabled={loadingStatus}
						type="submit">
						Submit
						{loadingStatus && <span className="spinner-border"></span>}
					</button>
				)}
			</div>
		</div>
	);
}

export default UserFormContainer;
