// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(a, b) {
//       return a.concat(b);
//     },
//     []
//   );
//   console.log(flattened);
  // flattened is [0, 1, 2, 3, 4, 5]

  //or arrow syntax:
  const complexArray = [[0, 1], [2, 3], [4, 5]]; 
  const flattened2 = complexArray.reduce((acc, cur) => {
    console.log('acc:', acc, 'cur:', cur)
    return acc.concat(cur)
  }, []);
  console.log(flattened2);