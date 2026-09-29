export type Validator = (value: string) => string | undefined;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateFullName: Validator = (value) => {
  const name = value.trim();
  if (!name) return "Please enter your full name.";
  if (name.length < 2) return "Name must be at least 2 characters.";
  return undefined;
};

export const validateEmail: Validator = (value) => {
  const email = value.trim();
  if (!email) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(email)) return "Please enter a valid email address.";
  return undefined;
};

export const validateNewPassword: Validator = (value) => {
  if (!value) return "Please create a password.";
  if (value.length < 8) return "Password must be at least 8 characters.";
  return undefined;
};

export const validateExistingPassword: Validator = (value) => {
  if (!value) return "Please enter your password.";
  return undefined;
};
