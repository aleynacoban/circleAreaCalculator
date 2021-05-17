const arguments = process.argv.slice(2);
let radius = arguments[0];
let area = Math.PI * Math.pow(radius,2)
console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area.toFixed(2)}`)