const arr = [1,2,3,4,5,6,7,8,9,10];
function chunk(arr, chunkSize ) {
  const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr.slice(i, chunkSize + i));
      i += chunkSize - 1;
    }
    return result;
  };
chunk(arr,5)
  console.log(result);