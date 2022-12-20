export function isValidEmail(email) {
  return email.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );
}

export function isValidId(id) {
  return id.length > 3 && id.length<11 && id.match(/^[a-z0-9]*$/)
}
export function isValidPassword(pwd) {
  return pwd.length > 7 && pwd.length <16 && pwd.match((/^[0-9a-zA-Z!@#$%^&+=]*$/))
}