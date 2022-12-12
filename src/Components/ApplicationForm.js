import React from 'react';

function ApplicationForm({ data, rejectedData }) {
	// console.log(rejectedData);

	return (
		<div className="mt-3">
			{data.rejected_data !== undefined &&
				data.rejected_data?.reject_reason !== null &&
				data.rejected_data?.reject_reason !== undefined && (
					<div className="alert alert-danger mr-4">
						<div className="fs-5 text-black-50 font-weight-bold mb-1">
							Rejection reason
						</div>
						<div className="fs-6 mb-3">{data.rejected_data.reject_reason}</div>
						<div className="fs-5 text-black-50 font-weight-bold mb-1">
							Description
						</div>
						<div className="fs-6">{data.rejected_data?.reject_description}</div>
					</div>
				)}
			{rejectedData && rejectedData.reject_reason !== null && (
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
			)}

			<div>
				<div className="fs-4 text-primary my-3">Basic information</div>
				<div className="row box_style  no-gutters mr-4 px-3 pt-3">
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Full legal name</div>
						<div className="fs-5">{data.legal_name}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Webiste URL</div>
						<div className="fs-5">{data.website_url}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Director/CEO name</div>
						<div className="fs-5">{data.director_ceo_name}</div>
					</div>
				</div>
				<div className="fs-4 text-primary my-3">Registered address</div>
				<div className="row  box_style no-gutters mr-4 px-3 pt-3 ">
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Address</div>
						<div className="fs-5">{data.address}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-8 col-lg-8 col-xl-9">
						<div className="text-muted fs-6">Pincode</div>
						<div className="fs-5">{data.pincode}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">City</div>
						<div className="fs-5">{data.city}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">State</div>
						<div className="fs-5">{data.state}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-6">
						<div className="text-muted fs-6">Country</div>
						<div className="fs-5">{data.country.label}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Phone number</div>
						<div className="fs-5">{data.phone_no}</div>
					</div>
				</div>
				<div className="fs-4 text-primary my-3">Present address</div>
				<div className="row box_style no-gutters mr-4 px-3 pt-3">
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Address</div>
						<div className="fs-5">{data.paddress}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-8 col-lg-8 col-xl-9">
						<div className="text-muted fs-6">Pincode</div>
						<div className="fs-5">{data.ppincode}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">City</div>
						<div className="fs-5">{data.pcity}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">State</div>
						<div className="fs-5">{data.pstate}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-6">
						<div className="text-muted fs-6">Country</div>
						<div className="fs-5">{data.pcountry.label}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Phone number</div>
						<div className="fs-5">{data.pphone_no}</div>
					</div>
				</div>
				<div className="fs-4 text-primary my-3">Contact details</div>
				<div className="row box_style no-gutters mr-4 px-3 pt-3 ">
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Contact person name</div>
						<div className="fs-5">{data.contact_person_name}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Email ID</div>
						<div className="fs-5">{data.email_id}</div>
					</div>
					<div className="form-group col-12 sol-sm-12 col-md-4 col-lg-4 col-xl-3">
						<div className="text-muted fs-6">Phone number</div>
						<div className="fs-5">{data.contact_phone_no}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApplicationForm;
