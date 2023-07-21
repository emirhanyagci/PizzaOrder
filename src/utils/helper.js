export function firebaseErrorCodeSplitter(code) {
  return code.slice(code.indexOf("/") + 1).replaceAll("-", " ");
}
