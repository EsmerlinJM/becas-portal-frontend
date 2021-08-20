export const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export const handleEmailValidation = (email, errors) => {
  console.log("ValidateEmail was called with", email);

  const isValid = isValidEmail(email);

  const validityChanged =
    (errors.email && isValid) || (!errors.email && !isValid);
  if (validityChanged) {
    console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
  }

  return isValid;
};
