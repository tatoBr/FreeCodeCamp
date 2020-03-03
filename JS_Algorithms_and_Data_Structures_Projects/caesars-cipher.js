function rot13(str) { // LBH QVQ VG!
  const start = 'A'.charCodeAt(0);
  const end = 'Z'.charCodeAt(0) + 1;
  const shift = 13;
  let shiftedStr = ''
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z0-9]/ig.test(str.charAt(i))) {
      let curCharCode = str.charCodeAt(i)
      let shifCharCode = curCharCode - shift < start ?
        curCharCode - shift - start + end : curCharCode - shift;
      let shiftedChar = String.fromCharCode(shifCharCode)
      shiftedStr += shiftedChar;
    }
    else{
      shiftedStr += str.charAt(i)
    }
  }
  console.log(shiftedStr);
  return shiftedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
