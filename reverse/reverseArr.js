const arr = [12,24,31,42,43215,66,72]

console.log(arr);

function reverseA(arr){
    var mid = Math.floor(arr.length / 2);
    for(let i = 0; i < mid; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

reverseA(arr)

console.log(arr);
