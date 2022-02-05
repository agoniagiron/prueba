/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`);

/**
 * Check if a string has correct use of parenthesis.
 *
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  parentesis_abiertos=str.match(/\(/gi) ? str.match(/\(/gi).length : 0;
  parentesis_cerrados=str.match(/\)/gi) ? str.match(/\)/gi).length : 0;
  llaves_abiertas=str.match(/\{/gi) ? str.match(/\{/gi).length : 0;
  llaves_cerradas=str.match(/\}/gi) ? str.match(/\}/gi).length : 0;
  corchetes_abiertos=str.match(/\[/gi) ? str.match(/\[/gi).length : 0;
  corchetes_cerrados=str.match(/\]/gi) ? str.match(/\]/gi).length : 0;
  if((parentesis_abiertos===parentesis_cerrados)
  &&(llaves_abiertas===llaves_cerradas)&&(corchetes_abiertos===corchetes_cerrados)){
    return true
  }else{
    return false
  }
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);
