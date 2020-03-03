function binaryAgent(str) {
  //divide a string num array de blocos de 8 bits
  let binBlocks = str.split(' ');

  //cria uma string para concatenar a mensagem
  let translatedStr = '';

  //itera o array de blocos de bits
  for (let block of binBlocks) {
    //converte cada bloco em um valor inteiro e então converte esse
    //inteiro para o seu valor equivalente na tabela ascii
    translatedStr +=
      String.fromCharCode(Number.parseInt(block, 2))
  }
  //console.log(binBlocks);
  return translatedStr;
}

let str = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(str);
