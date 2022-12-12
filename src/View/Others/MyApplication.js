import React, { useState } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { FORMDETAILS, PARTNERSTATUS } from '../../Queries';
import { FORMSUBMIT } from '../../Mutations';

import { useHistory } from 'react-router-dom';

import ReSubmitModal from '../../Modals/SubmitConferm';

import Back from '../../Components/GoBack';
import ApplicationForm from '../../Components/ApplicationForm';
import EditApplicationForm from '../../Components/ApplicationFormEdit';
import Loaders from '../../Components/Loader/Loader';
// import Loader from 'react-loader-spinner';
import PartnerNav from '../../Components/PartnerComp/PartnerNavbar';
function MyApplication(props) {
	let history = useHistory();
	const [showEdit, setshowEdit] = useState(false);
	const [formData, setformData] = useState({});
	const [showSubmitForm, setshowSubmitForm] = useState(false);
	const { loading, data } = useQuery(FORMDETAILS, {
		fetchPolicy: 'network-only',
	});

	const [formSubmitFun, { loading: loadingStatus }] = useMutation(FORMSUBMIT, {
		update(proxy, result) {
			setshowSubmitForm(false);
			history.push('/partner_home');
		},

		refetchQueries: [
			{
				query: PARTNERSTATUS,
			},
		],
	});
	if (loading) {
		return <Loaders />;
	}

	const BackTORUles = () => {
		props.history.goBack();
	};

	const EditForm = () => {
		setshowEdit(true);
	};
	const cancelClick = () => {
		setshowEdit(false);
	};
	const submitApplication = (e) => {
		setformData(e);
		setshowSubmitForm(true);
	};
	const cancel = () => {
		setshowSubmitForm(false);
	};
	const ResubmitForm = () => {
		try {
			formSubmitFun({ variables: { formdata: formData } });
		} catch (error) {
			//console.log(error);
		}
	};

	return (
		<div>
			<ReSubmitModal
				showSubmitForm={showSubmitForm}
				cancel={cancel}
				ResubmitForm={ResubmitForm}
				loadingStatus={loadingStatus}
			/>

			<div className="partners_application">
				<div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-md-1">
					<div className="d-flex p-3 ml-md-1 ml-xl-4 ml-lg-4 mb-3">
						<PartnerNav color={false} colorCondition={'show'} />
					</div>
					<div className="d-flex pl-3 pr-3 ml-md-1 ml-xl-4 ml-lg-4">
						<Back Goback={BackTORUles} />
					</div>

					<div className="d-flex ml-md-1 ml-xl-4 ml-lg-4 pl-3 mt-1">
						<span className="fs-4 font-weight-bold">Verification form</span>

						{data.getFormDetails.form_status === 'Rejected' &&
							!showEdit &&
							data.getFormDetails.rejected_form_count < 4 && (
								<button
									className="ml-auto btn btn-primary mr-4"
									onClick={EditForm}>
									Edit
								</button>
							)}
					</div>

					<div className="ml-md-1 ml-xl-4 ml-lg-4 pl-3 pb-4">
						{!showEdit ? (
							<ApplicationForm
								data={data.getFormDetails.form_details}
								rejectedData={data.getFormDetails.rejected_data}
							/>
						) : (
							<EditApplicationForm
								data={data.getFormDetails.form_details}
								submitApplication={submitApplication}
								cancelClick={cancelClick}
								rejectedData={data.getFormDetails.rejected_data}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyApplication;
