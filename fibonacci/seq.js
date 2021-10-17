/**
 * Fibonacci through recursive function
 * O(2^n) which is not a good algorithm
**/
let counter = 0
function fibonacci (position) {
    counter++
    if (position <= 2) {
      // position === 1 || position === 2
      return 1
    } else {
      return fibonacci(position - 1) + fibonacci(position - 2)
    }
  }
  console.log(fibonacci(10))
  //fib10
  //fib9 fib8 fib7 fib6.... fib1
  //fib8 fib7 fib6 ...fib1
  //fib7 fib6 ...fib1
  //fib6
  
  console.log('on^2 count:',counter)
  var countA = 0;
  function fib(n){
    return new Array(n).fill(1).reduce((arr, _, i) => {
      arr.push((i<=1)? i:arr[i-2]+arr[i-1])
      countA++
      return arr
    },[]);
  }
  fib(10)
  console.log('ctA', countA)
  /**
   * Memorized Fibonacci: save the computed result in cache and reuse it
  **/
  let counter1 = 0
  let counter2 = 0
  function fibMemo (position, cache = []) {
    if (cache[position]) {
      /**
       * 如果在 cache 中有找到該 position 的數值，
       * 則直接回傳不用重算
       **/
      counter1++
      return cache[position]
  
    } else {
      /**
       * 如果在 cache 中沒有找到該 position 的數值，
       * 則計算該 position 的數值，並存到 cache 中
      **/
     counter2++
      if (position <= 2) {
        cache[position] = 1
      } else {
        cache[position] = fibMemo(position-1, cache) + fibMemo(position-2, cache)
      }
      console.log('cache',cache)
      return cache[position]
    }
  }
  
  console.log(fibMemo(10))
  console.log('10',counter1)
  console.log('7',counter2)