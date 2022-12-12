import React, { useContext } from 'react';
import logo from '../../Images/logoTransparent.png';
import { AuthContext } from '../../Context/auth';

import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function PartnerNavbar({ yourAppFunc, color, colorCondition }) {
	const history = useHistory();
	const { logout } = useContext(AuthContext);
	const partnerhome = () => {
		history.push('/partner_home');
	};

	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				className={color ? 'py-4 fixed-top partnersNav' : 'py-4 fixed-top partnersNav '}>
				<img
					src={logo}
					alt="Images"
					className="logo_auth_page ml-2"
					onClick={partnerhome}
				/>
				<div className="d-flex ml-auto">
					{!color ? (
						<div
							className={
								colorCondition === 'show'
									? 'fs-5 pr-4 text-white on-hover'
									: 'fs-5 pr-4 on-hover text-white'
							}
							onClick={yourAppFunc}>
							Your application
						</div>
					) : null}

					<div className="fs-5 logout on-hover text-white" onClick={logout}>
						Logout
					</div>
				</div>
			</Navbar>
			<br></br>
			<br></br>
		</div>
	);
}

export default PartnerNavbar;
