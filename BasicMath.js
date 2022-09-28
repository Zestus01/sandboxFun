function calculate(str) {
  console.log(str);
  let sum = 0;
  let index = 0;
  let backIndex = 0;
  let sub = '';
  let num1 = 0;
  let start = 0;
  if(str.indexOf('p') === 1 || str.indexOf('m') === 1){
    sum = Number(str[0]);
    start = 1;
  }
  for(let char of str){
    if(isNaN(char)){
        if(start === 0){
        sum = sum + Number(str.substring(backIndex, index));
        start = 23;
        }
        console.log('Sum is: ' + sum);
      for(let i = index; i < str.length; i++){
        if(!isNaN(str[i])){
          backIndex = i;
          num1 = str[i];
          break;
          }
        }  // End of for loop
        sub = str.substring(index, backIndex);
        switch (sub){
            case 'plus':
              sum = Number(num1) + sum;
              break;
            case 'minus':
              sum = sum - Number(num1);
              break;
        }
      }
      index++;
   }// End of char loop
  return sum + '';
}
