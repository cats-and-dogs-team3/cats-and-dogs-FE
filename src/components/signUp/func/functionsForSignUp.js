export function isValidEmail(email) {
  return email.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );
}

export function isValidId(id) {
  return id.match(/^(?=.*[a-z])(?=.*\d)[a-z\d]{4,10}$/)
}
export function isValidPassword(pwd) {
  return pwd.match((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/))
}
