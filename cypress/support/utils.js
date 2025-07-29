// Utility function to generate a random string of a given length to be used as item name

export function generateRandomString(length = 6) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomString;
}
