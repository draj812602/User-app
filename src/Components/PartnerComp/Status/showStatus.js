/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useHistory } from 'react-router-dom';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import formSubActive from '../../../Images/form-submitted-active.png';
import inProcessActive from '../../../Images/in-process-active.png';
import inProcessInActive from '../../../Images/in-process-inactive.png';
import approvedActive from '../../../Images/approved-active.png';
import approvedInActive from '../../../Images/approved-inactive.png';
import rejectedActive from '../../../Images/rejected-active.png';

function ShowStatus({
	data,
	reminder,
	ReminderSendFun,
	form_current_data,
	loadingReminder,
}) {
	let history = useHistory();

	// console.log(reminder);
	// console.log(form_current_data);
	const Reapply = () => {
		history.push('/myApplication');
	};
	const renderTooltip = (props) => (
		<Tooltip id="sidebarTooltip" {...props}>
			Reload to check<br></br> application status
		</Tooltip>
	);
	const ReloadPage = () => {
		window.location.reload();
	};

	return (
		<div>
			<div className="row no-gutters"></div>
			<div className="row no-gutters">
				<div className="col-2 col-sm-2 col-md-1 col-lg-2 col-xl-2"></div>
				<div className="col-12 col-sm-9 col-md-12 col-lg-8 col-xl-8 partner-status">
					<div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 mb-5 ml-3">
						{form_current_data.active_status === 'Submitted' && (
							<>
								<div className="fs-4 font-weight-bold mb-2 mt-5">
									Stay tuned !
								</div>
								<div className="fs-5 text-muted font-weight-bold">
									Shortly, your form will be send to the verification process.
								</div>
								<OverlayTrigger placement="right" overlay={renderTooltip}>
									<button
										className="btn btn-outline-primary float-right reloadBtn"
										onClick={ReloadPage}>
										<i className="ri-refresh-line fs-6"></i>
									</button>
								</OverlayTrigger>
							</>
						)}

						{form_current_data.active_status === 'In process' && (
							<>
								<div className="fs-4 font-weight-bold mb-2 mt-5">
									Under verification
								</div>
								<div className="fs-5 text-info font-weight-bold">
									Your application is currently under review.
								</div>
								<OverlayTrigger placement="right" overlay={renderTooltip}>
									<button
										className="btn btn-outline-primary float-right reloadBtn "
										onClick={ReloadPage}>
										<i class="ri-refresh-line fs-6"></i>
									</button>
								</OverlayTrigger>
							</>
						)}

						{form_current_data.active_status === 'Approved' && (
							<>
								<div className="fs-4 font-weight-bold mb-2 mt-5">
									Verification process complete.
								</div>
								<div className="fs-5 text-success font-weight-bold">
									Your application is approved!
								</div>
							</>
						)}
						{form_current_data.active_status === 'Rejected' &&
							form_current_data.submitted_count !== 4 && (
								<>
									<div className="fs-4 font-weight-bold mt-5">
										Verification process complete.
									</div>
									<div className="fs-5 text-warning font-weight-bold">
										{`Your application is rejected. You can reapply ${
											4 - form_current_data.submitted_count
										} more times.`}
									</div>
								</>
							)}
						{form_current_data.active_status === 'Rejected' &&
							form_current_data.submitted_count === 4 && (
								<>
									<div className="fs-4 font-weight-bold mt-5">We regret!</div>
									<div className="fs-5 text-danger font-weight-bold">
										Your application got rejected for the 4th time. You will not
										be able to reapply.<br></br> If any concern, please drop us
										an email at
										<a href="javascript:void(0)"> dummyaddress@dummy.com</a>
									</div>
								</>
							)}
						{reminder.reminder_status && (
							<>
								<a
									href="javascript:void(0)"
									onClick={() =>
										ReminderSendFun(
											form_current_data.active_status,
											form_current_data.form_id
										)
									}>
									Application is taking long to get approved? Send us a reminder
								</a>
								{loadingReminder && (
									<span className="spinner-border mt-1"></span>
								)}
							</>
						)}
					</div>
					<div className="row no-gutters ">
						<div
							className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3"
							align="center">
							<img
								src={formSubActive}
								alt="Images"
								className="statusImage"></img>
							<div
								className={
									data[0].status_flag === 'true'
										? 'mt-auto mx-auto fs-5 pt-3'
										: 'mt-auto mx-auto text-muted fs-5 pt-3'
								}>
								Form submitted
							</div>
							<div className="mt-auto mx-auto fs-5">{data[0].updated_date}</div>
						</div>
						<div
							className="col-11 col-sm-11 col-md-1 col-lg-1 col-xl-1 my-auto"
							align="center">
							<div className="dash"></div>
						</div>
						<div
							className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3"
							align="center">
							<img
								src={
									data[1].status_flag === 'true'
										? inProcessActive
										: inProcessInActive
								}
								alt="Images"
								className="statusImage"></img>
							<div
								className={
									data[1].status_flag === 'true'
										? 'mt-auto mx-auto fs-5 pt-3'
										: 'mt-auto mx-auto text-muted fs-5 pt-3'
								}>
								In process
							</div>
							<div className="mt-auto mx-auto fs-5">{data[1].updated_date}</div>
						</div>
						<div
							className="col-11 col-sm-11 col-md-1 col-lg-1 col-xl-1 my-auto"
							align="center">
							<div className="dash"></div>
						</div>
						<div
							className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3"
							align="center">
							{data[2].statusName === 'Approved' ? (
								<img
									src={
										data[2].status_flag === 'true'
											? approvedActive
											: approvedInActive
									}
									alt="Images"
									className="statusImage"></img>
							) : (
								<img
									src={rejectedActive}
									alt="Images"
									className="statusImage"></img>
							)}

							<div
								className={
									data[2].status_flag === 'true'
										? 'mt-auto mx-auto fs-5 pt-3'
										: 'mt-auto mx-auto text-muted fs-5 pt-3'
								}>
								{data[2].statusName}
							</div>
							<div className="mt-auto mx-auto fs-5">{data[2].updated_date}</div>
						</div>
					</div>

					{form_current_data.active_status === 'Submitted' && (
						<div className="alert alert-info no-gutters mt-5 col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10 ml-4">
							The verification process should complete within 12 hours.
						</div>
					)}
					{form_current_data.active_status === 'In process' && (
						<div className="alert alert-info no-gutters mt-5 col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10 ml-4">
							The verification process should complete within 12 hours.
						</div>
					)}
					{form_current_data.active_status === 'Approved' && (
						<div className="alert alert-success no-gutters mt-5 col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10 ml-4">
							Congratulations! Your application is approved, please check your
							registered email ID for sign in link and OTP.
						</div>
					)}
					{form_current_data.active_status === 'Rejected' && (
						<div className="alert alert-danger mt-5 col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10 ml-4 ">
							Your application got rejected due to
							<span className="fs-5 font-weight-bold ml-2 mr-2">
								"{data[2].reject_header}"
							</span>
							<span className="ml-1 mr-2">is not correct.</span>
							<a href="javascript:void(0)" onClick={Reapply}>
								Please review and reapply.
							</a>
						</div>
					)}
				</div>
				<div className="col-1 col-sm-1 col-md-12 col-lg-2 col-xl-2"></div>
			</div>

			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<br></br>
		</div>
	);
}

export default ShowStatus;
