/*
ada array 2 dimensi.
setiap element array mau di validasi menggunakan for.
if contains 'W'
*/

function check(test) {
  let arr = [];
  let countArr = [];
  let firstDim = test.split(' ');
  for(let counterI = 0; counterI < firstDim.length; counterI++) {
    let secondDim = firstDim[counterI];
    let numberOfWs = 0;
    arr.push([]);
    for(let counterJ = 0; counterJ < secondDim.length; counterJ++) {
      if(secondDim[counterJ].toLowerCase() === 'w') {
        arr[counterI].push(1);
        numberOfWs++;
      }
      else
        arr[counterI].push(0);
    }
    countArr.push(numberOfWs);
  }

  let copyCountArr = countArr.map(currentVal => currentVal)
  copyCountArr.sort();
  let wMode = copyCountArr[copyCountArr.length-1];

  const indexOfW = countArr.indexOf(wMode);

  return firstDim[indexOfW];
}

let test = "hellow world wow";
console.log(check(test));
