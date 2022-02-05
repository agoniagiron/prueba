/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

 var a, b, res,N;
 N = prompt('Ingrese cantidad:','');
 a = 1;
 b = 2;

 for(i=2; i <=N; i++){
     res = a + b;
     a = b;
     b = res;
 console.log(res);	
 }

