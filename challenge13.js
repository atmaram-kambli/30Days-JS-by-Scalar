function memoize(func) {
    const memo = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (!(key in memo)) {
        memo[key] = func.apply(this, args);
      }
  
      return memo[key];
    };
  }
  
  
  // Function to be memorized
  function add(x, y) {
    console.log(`Adding ${x} and ${y}`);
    return x + y;
  }
  
  // Creating a memorized version of the 'add' function
  const memorizedAdd = memoize(add);
  
  const result1 = memorizedAdd(2, 2);
  console.log(result1);
  
  const result2 = memorizedAdd(2, 2);
  console.log(result2);
  
  const result3 = memorizedAdd(4, 5);
  console.log(result3);
  