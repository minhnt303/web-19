'use strict'

function generate(testLengthArray){
  
 var arr = [];
  arr[i] = obj;
  for(var i = 0; i < testLengthArray.length; i++){
    if(i == 1){
      var n = testLengthArray[i];
      var arr1 = [];
      for(var j = 0; j < n; j++){
        arr1[j] = j;
      }

      var obj = {
        input: arr1,
        target: n + 8,
        output: -1
      }
      arr[i] = obj;
    }
    else{
      var n = testLengthArray[i];
      var arr1 = [];
      for(var j = 0; j < n; j++){
        arr1[j] = j;
      }

      var obj = {
        input: arr1,
        target: n - 1,
        output: n - 1
      }
      arr[i] = obj;
    }
  }
  return arr;


  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),            
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm

}

module.exports = generate
