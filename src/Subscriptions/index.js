import { gql } from '@apollo/client';
export const STATUSCHANGE = gql`
	subscription {
		statusNotification {
			user_id
			formStatusData {
				statusName
				status_flag
				updated_date
				reject_reason
				reject_header
			}
			reminder {
				reminder_status
				form_status
			}
			form_current_data {
				form_id
				submitted_count
				active_status
			}
		}
	}
`;

export const REMINDERSUBSCRIPTION = gql`
	subscription {
		getReminderStatus {
			reminder_status
			country
		}
	}
`;
export const SUBMITEDSUBSCRIPTION = gql`
	subscription {
		getFormStatusBoolValue {
			form_country
			status_value
		}
	}
`;
