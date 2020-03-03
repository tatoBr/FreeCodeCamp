function convertToRoman(num) {
    let mille = Math.floor(num / 1000);
    let quingenti = Math.floor((num % 1000) / 500);
    let centum = Math.floor((num % 1000) / 100) - (quingenti * 5);
    let quinquaginta = Math.floor(((num % 1000) % 100) / 50);
    let decem = Math.floor(((num % 1000) % 100 / 10) - quinquaginta * 5);
    let quinque = Math.floor((((num % 1000) % 100) % 10) / 5);
    let unus = Math.floor(((num % 1000) % 100) % 10) - quinque * 5;

    const nineCentsRegEx = /DCCCC/g;
    const fourCentsRegEx = /CCCC/g
    const nineTentsRegEx = /LXXXX/g
    const fourTentsRegEx = /XXXX/g
    const nineRegEx = /VIIII/g
    const fourRegEx = /IIII/g

    let romamNumeral = 'M'.repeat(mille).concat(
        'D'.repeat(quingenti),
        'C'.repeat(centum),
        'L'.repeat(quinquaginta),
        'X'.repeat(decem),
        'V'.repeat(quinque),
        'I'.repeat(unus))
        .replace(nineCentsRegEx, 'CM')
        .replace(fourCentsRegEx, 'CD')
        .replace(nineTentsRegEx, 'XC')
        .replace(fourTentsRegEx, 'XL')
        .replace(nineRegEx, 'IX')
        .replace(fourRegEx, 'IV');

    return romamNumeral;
}

convertToRoman(3449);
