/** @format */

import gql from 'graphql-tag';

export const ADMINSIDEBARDATA = gql`
	query {
		getStatisticCounts {
			all
			newRequests
			inProcess
			approved
			rejected
			reminders
		}
	}
`;

export const TABLEDATA = gql`
	query getListOfFormsSpecificStatus($statistic: String!) {
		getListOfFormsSpecificStatus(statistic: $statistic) {
			columnData {
				dataField
				text
				sort
			}
			listOfForms {
				serial_no
				user_id
				form_id
				legal_name
				contact_person_name
				date
				application_status
				reject_header
				reminder_count
				reminder_data {
					s_no
					reminder_for
					reminder_sent_time
				}
			}
		}
	}
`;
export const PARTNERSTATUS = gql`
	query {
		getLoggedinPartnerFormStatus {
			formStatusData {
				statusName
				status_flag
				updated_date
				reject_header
				reject_reason
			}
			reminder {
				reminder_status
			}
			form_current_data {
				form_id
				submitted_count
				active_status
			}
		}
	}
`;

export const FORMDETAILS = gql`
	query {
		getFormDetails {
			form_status
			rejected_form_count
			form_details {
				legal_name
				website_url
				director_ceo_name
				address
				country {
					label
					value
				}
				state
				city
				pincode
				phone_no
				paddress
				pcountry {
					label
					value
				}
				pstate
				pcity
				ppincode
				pphone_no
				contact_person_name
				email_id
				contact_phone_no
			}
			rejected_data {
				reject_reason
				reject_description
			}
		}
	}
`;

export const GETFORMDATABYID = gql`
	query getFormDataById($form_id: ID!) {
		getFormDataById(form_id: $form_id) {
			form_id
			user_id
			legal_name
			website_url
			director_ceo_name
			address
			country {
				label
				value
			}
			state
			city
			pincode
			phone_no
			paddress
			pcountry {
				label
				value
			}
			pstate
			pcity
			ppincode
			pphone_no
			contact_person_name
			email_id
			contact_phone_no
			rejected_data {
				reject_reason
				reject_description
			}
		}
	}
`;
