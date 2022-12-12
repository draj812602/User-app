import React from 'react';

function Form1({ register, errors, defaultValues,toInputUppercase}) {
	
	return (
		<div>
			<div className="row no-gutters">
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="legal_name">
						Full legal name
					</label>
					<input
						type="text"
						name="legal_name"
						id="legal_name"
						onInput={toInputUppercase}
						className={
							errors.legal_name
								? 'form-control error_input '
								: 'form-control  '
						}
						defaultValue={defaultValues && defaultValues.legal_name}
						placeholder="Full legal name"
						ref={register({
							required: 'Name is required',
						})}
					/>

					{errors.legal_name && (
						<div>
							<span className="text-error">{errors.legal_name.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="website_url">
						Website URL
					</label>
					<input
						type="text"
						name="website_url"
						id="website_url"
						className={
							errors.website_url
								? 'form-control error_input '
								: 'form-control '
						}
						defaultValue={defaultValues && defaultValues.website_url}
						placeholder="Website URL"
						ref={register({
							required: 'Website URL is required',
						})}
					/>

					{errors.website_url && (
						<div>
							<span className="text-error">{errors.website_url.message}</span>
						</div>
					)}
				</div>
				<div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<label className="label" htmlFor="director_ceo_name">
						Director/CEO name
					</label>
					<input
						type="text"
						name="director_ceo_name"
						id="director_ceo_name"
						onInput={toInputUppercase}
						className={
							errors.director_ceo_name
								? 'form-control error_input '
								: 'form-control  '
						}
						defaultValue={defaultValues && defaultValues.director_ceo_name}
						placeholder="Director/CEO name"
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
		</div>
	);
}

export default Form1;
