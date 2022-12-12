import React from 'react';
import { Modal } from 'react-bootstrap';

function SubmitConferm({
	showSubmitForm,
	cancel,
	ResubmitForm,
	loadingStatus,
}) {
	return (
		<div>
			<Modal
				show={showSubmitForm}
				dialogClassName="device_modal_class"
				onHide={cancel}
				backdrop="static"
				keyboard={true}>
				<div className="">
					<div className="d-flex">
						<div className="modal_header mb-2">
							Submit verification form
						</div>
						<i
							className="ri-close-line ri-lg fs-6 ml-auto closeModal"
							onClick={cancel}></i>
					</div>
					<div className="modal_text font-weight-bold">
						After submission you wont be able to edit the form again.{' '}
					</div>

					<div className="d-flex mt-4">
						<div className="ml-auto modalbtn ">
							<button className="btn btn-secondary mr-2 " onClick={cancel}>
								Cancel
							</button>
							<button
								className="btn btn-primary"
								onClick={ResubmitForm}
								disabled={loadingStatus}>
								Submit
								{loadingStatus && (
									<span className="spinner-border float-right"></span>
								)}
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default SubmitConferm;
