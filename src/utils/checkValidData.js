export const checkData = (email, password) => {
	
	const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

	const isEmailValid = emailRegex.test(email);   
	const isPasswordValid = passwordRegex.test(password);     

	if(!isEmailValid) return "Email is not valid";
	if(!isPasswordValid) return "Password is not valid";

	return null;

}