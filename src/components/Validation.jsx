export default function Validation(inputValues) {
  const errors = {};
  const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

  if (inputValues.name === "") {
    errors.name = "Name is Required";
  }

  if (inputValues.email === "") {
    errors.email = "Email not Provided";
  } else if (!email_regex.test(inputValues.email)) {
    errors.email = "Not a Valid Email Formet";
  }

  if (inputValues.password === "") {
    errors.password = "Password is Required";
  } else if (!password_regex.test(inputValues.password)) {
    errors.password = "Password not match the requirment";
  }

  if(inputValues.message === ""){
    errors.message = "Please Type a message here!"
  }

  return errors;
}
