'use strict'

function generate(testLengthArray){
  for(let i = 0; i < testLengthArray.length; i++){
    for(let j = i + 1; j < testLengthArray.length; j++){
        if(testLengthArray[i] > testLengthArray[j]){
            let temp = testLengthArray[i];
            testLengthArray[i] = testLengthArray[j];
            testLengthArray[j] = temp;
        }
    }
  }
  return Array.from({length : testLengthArray.length})
    .map(item => ({
      input: Array.from({length: item}).map(item => []),
      target: 0,
      output: -1
    })
  ); // Remove this line and change to your own algorithm

    
}

module.exports = generate
