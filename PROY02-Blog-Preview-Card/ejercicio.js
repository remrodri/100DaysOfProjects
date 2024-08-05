const array = [1, 2, 3, 4, 10, 11];

// function simpleArraySum(ar) {
//   // const initialValue=0
//   // const res = ar.reduce(
//   //     (ac,cv)=>ac+cv,initialValue
//   // )
//   let ini = 0;
//   ar.map((elem) => (ini = ini + elem));

//   return ini;
// }

function sumaNums(array) {
  let ini = 0;
  // array.forEach((element) => {
  //   ini += element;
  // });
  array.map((elem) => {
    ini = ini + elem;
  });
  console.log("ini::: ", ini);
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// let ini = 0;
// return ar.reduce((acum, currentV) => acum + currentV, ini);

arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
function diferencia(arr) {
  let acum1 = 0;
  let acum2 = 2;
  let sum1 = 0;
  let sum2 = 0;
  // console.log('::: ',arr[0][0] );
  for (let index = 0; index < arr.length; index++) {
    //  console.log('::: ',typeof(arr[index][acum]) );
    sum1 += arr[index][acum1];
    sum2 += arr[index][acum2];
    acum2--;
    acum1++;
  }
  // console.log('sum1::: ', sum1);
  return Math.abs(sum1-sum2);
}

// sumaNums(array);
console.log("::: ", diferencia(arr));
// diferencia(arr)
