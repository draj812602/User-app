import React, { useEffect, useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { useQuery, useSubscription } from '@apollo/react-hooks';
import { PARTNERSTATUS } from '../../Queries';
import { REMINDERMUTATION } from '../../Mutations';
import { STATUSCHANGE } from '../../Subscriptions';

import PartnerNav from '../../Components/PartnerComp/PartnerNavbar';

import '../../Styles/formStatus.css';
import Loaders from '../../Components/Loader/Loader';
// import Loader from 'react-loader-spinner';

import { AuthContext } from '../../Context/auth';

import UserForm from '../../Components/PartnerComp/UserFormContainer';
import Status from '../../Components/PartnerComp/Status/showStatus';

function Partnerhome() {
	let history = useHistory();
	const { user } = useContext(AuthContext);
	const [formLivedata, setformLivedata] = useState(null);
	const { data: getSubsdata, error: subsError } = useSubscription(STATUSCHANGE);
	const { loading, data } = useQuery(PARTNERSTATUS, {
		fetchPolicy: 'network-only',
	});
	const [reminderFun, { loading: loadingReminder }] = useMutation(
		REMINDERMUTATION,
		{
			update(proxy, result) {},
			refetchQueries: [
				{
					query: PARTNERSTATUS,
				},
			],
		}
	);
	useEffect(() => {
		if (getSubsdata) {
			setformLivedata(getSubsdata);
		}
	}, [getSubsdata]);
	if (loading) {
		return  <Loaders/>;
	}

	const yourAppFunc = () => {
		history.push('/myapplication');
	};

	if (formLivedata !== null) {
		let id = formLivedata.statusNotification.user_id;
		if (parseInt(user.id) === parseInt(id)) {
			data.getLoggedinPartnerFormStatus.formStatusData =
				formLivedata.statusNotification.formStatusData;
			data.getLoggedinPartnerFormStatus.reminder =
				formLivedata.statusNotification.reminder;
			data.getLoggedinPartnerFormStatus.form_current_data =
				formLivedata.statusNotification.form_current_data;
		}
	}

	const ReminderSendFun = async (status, id) => {
		try {
			await reminderFun({ variables: { form_id: id, form_status: status } });
		} catch (error) {
			//		console.log(error);
		}
	};

	return (
		<div
			className={
				data.getLoggedinPartnerFormStatus?.formStatusData.length <= 0
					? 'form_container'
					: 'form_container_submited'
			}>
			{data.getLoggedinPartnerFormStatus?.formStatusData.length > 0 ? (
				<div className="d-flex p-3 partnersNav">
					<PartnerNav color={false} yourAppFunc={yourAppFunc} />
				</div>
			) : (
				<div className="d-flex p-3 partnersNav">
					<PartnerNav color={true} yourAppFunc={yourAppFunc} />
				</div>
			)}
			{data.getLoggedinPartnerFormStatus?.formStatusData.length <= 0 && (
				<div class="row no-gutters">
					<div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4 offset-lg-4 offset-md-2 fs-5 py-3 no-gutters">
						Verification form
					</div>
					<div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4 offset-lg-4 offset-md-2 box_style form_containerSmall">
						<UserForm />
					</div>
				</div>
			)}
			{data.getLoggedinPartnerFormStatus?.formStatusData.length > 0 && (
				<div className="">
					<Status
						data={data.getLoggedinPartnerFormStatus?.formStatusData}
						reminder={data.getLoggedinPartnerFormStatus?.reminder}
						form_current_data={
							data.getLoggedinPartnerFormStatus?.form_current_data
						}
						ReminderSendFun={ReminderSendFun}
						loadingReminder={loadingReminder}
					/>
				</div>
			)}
		</div>
	);
}

export default Partnerhome;
