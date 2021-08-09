/*  
 0,1,1,2,3,5,8,13,21,34,55,89,144
 0+1 = 1;
 1+1 = 2;
 2+1 = 3;
 3+2 = 5;
 5+3 = 8;
 8+5 = 13;
 13+8= 21; 
 4th = 3rd + 2nd
 Logic ------------
 n= n(n-1)+ n(n-2)
 i= i(i-1)+ i(i-2)
 
 */

 const fevi = [2,3]
 for( let i=2; i<10; i++){ 
    fevi[i]= fevi[i-1]+fevi[i-2]
 }
 console.log(fevi);





