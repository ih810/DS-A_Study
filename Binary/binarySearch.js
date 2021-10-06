function binarySearch(arr, target) {
    var left = 0
    var right = arr.length-1
    while(left <= right){
        var mid = arr[Math.floor((left+right)/2)]
        if(arr[mid] === target){
            console.log('found')
            return true, mid
        } else if (arr[mid] > target) {
            right = mid
        } else {
            left = mid
        }
    }
    return false
}

arr = [1,2,3,4,5,8,9]

var result = binarySearch(arr, 6)

if(result === false){
    console.log('nothing')
} else {
    console.log('found at index', result)
}
