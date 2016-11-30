module.exports = (str) => {
	if(	typeof str === 'string' ) {
		return  str.toUpperCase();
	} else {
		return "Invalid Input"
	}
};
