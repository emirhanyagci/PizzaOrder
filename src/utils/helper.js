export function firebaseErrorCodeSplitter(code) {
  return code.slice(code.indexOf("/") + 1).replaceAll("-", " ");
}
//get firebase error and split to code and message
export function firebaseErrorConverter(error) {
  return {
    code: firebaseErrorCodeSplitter(error.code),
    message: error.message,
  };
}
