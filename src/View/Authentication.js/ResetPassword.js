import React, { useEffect } from 'react';
import '../../Styles/loginStyles.css';
import { useMutation } from '@apollo/react-hooks';
import ResetPassword from '../../Components/LoginComponents/Resetpassword';
import { UPDATEPASSWORD } from '../../Mutations/index';
import { useHistory } from 'react-router-dom';

import Jwt_Decode from 'jwt-decode';

function ResetPassworduser(props) {
	let token_id = props.match.params.token_id;

	const jwt_Token_decoded = Jwt_Decode(token_id);
	// console.log(jwt_Token_decoded);

	const history = useHistory();

	// console.log(Date.now())

	useEffect(() => {
		if (jwt_Token_decoded.exp * 1000 <= Date.now()) {
			// if (((jwt_Token_decoded.exp * 1000)-8,56,24,930) <= Date.now())

			return history.push('/link_expired');
		}
	}, [history, jwt_Token_decoded.exp]);

	const [ChangePass, { loading }] = useMutation(UPDATEPASSWORD, {
		update(proxy, result) {},
	});

	const ChangePassword = async (e) => {
		// console.log(e)
		try {
			await ChangePass({
				variables: {
					token: token_id,
					password: e.password,
					confirm_password: e.confirmPass,
				},
			});
			if (jwt_Token_decoded.role === 'partner') {
				history.push('/');
			} else if (jwt_Token_decoded.role === 'admin') {
				history.push('/admin');
			}
			// history.push('/admin');
		} catch (error) {
			//console.log(error);
		}
	};

	return (
		<div className="reset_background">
			
			<ResetPassword ChangePassword={ChangePassword} loading={loading} />
		</div>
	);
}

export default ResetPassworduser;
