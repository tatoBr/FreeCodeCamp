function telephoneCheck(str) {
  // Good luck!
  let foneRegex =
  /^(1\s?)?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/
  console.log(str.match(foneRegex));
  return foneRegex.test(str)
}
console.log(telephoneCheck("1 555-555-5555"))
//console.log(telephoneCheck("555-5555"))
//console.log(telephoneCheck("2 (757) 622-7382"))
//telephoneCheck("2 (757) 622-7382")
//telephoneCheck("1 (555) 555-5555")
//telephoneCheck("555-555-5555");
