var count = 0;

function binarySearch(arr, target) {
    var left = 0
    var right = arr.length-1
    while(left <= right){
        console.log('running')
        var mid = Math.floor((left+right)/2)
        console.log('mid',mid)
        if(arr[mid] === target){
            count++;
            console.log('found')
            return true, mid
        } else if (arr[mid] > target&&arr.length>1) {
            console.log("mid>targ", left, mid, right)
            console.log('reading', arr[mid], target)
            right = mid
        } else if(arr[mid] < target&&arr.length>1){
            console.log("mid<targ", left, mid, right)
            console.log('reading', arr[mid], target)
            left = mid
        } 
        count++;
        if(count === arr.length){
            return false
        }
    }
    return false
}

arr = [1,2,3,4,5,8,9,10]
//     0,1,2,3,4,5,6, 7
var result = binarySearch(arr, 2)

if(result === false){
    console.log('nothing')
} else {
    console.log('found at index', result)
}

console.log('count',count)