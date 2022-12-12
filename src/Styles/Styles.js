const styles = {
	control: (base, { isDisabled }) => ({
		...base,
		color: 'white',

		'&:hover': { borderColor: '#bac3d5' }, // border style on hover
		boxShadow: 'none', // no box-shadow
		backgroundColor: isDisabled ? '#f2f2f2' : '#b8c3d7',
        borderRadius: "6px",
        height:"38px",
	}),
	dropdownIndicator: (base, { isDisabled }) => ({
		...base,
		// color: "white",
		color: isDisabled ? '#b8c3d7' : 'white',
		// background: '#41506b', // Custom colour
		backgroundColor: isDisabled ? '#f2f2f2' : '#41506b',
		padding: '8.5px',
        borderRadius: "6px",

	}),
	placeholder: (defaultStyles, { isDisabled }) => {
		return {
			...defaultStyles,
			// color: 'white',
			color: isDisabled ? '#b8c3d7' : 'white',
		};
	},
	option: (styles, { isSelected }) => ({
		...styles,
		'&:hover': { background: 'rgba(217, 233, 255)' }, // border style on hover
		boxShadow: 'none', // no box-shadow
		// border: `1px solid #E8E8E8`,
		border: 'none',
		// font: '14px',
		backgroundColor: isSelected ? '#b8c3d7' : 'white',
	}),

	multiValue: (styles) => ({
		...styles,
		backgroundColor: '#C8EDEB',
	}),
};
export default styles;
