// var count = 0
// //action
// function swap(items, leftIndex, rightIndex){
//     console.log('items in swap1', items)
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
//     console.log('items in swap2', items)
//     count++
// }

// //break half
// function partition(items, left, right) {
//     console.log('partition left and right', left, right)
//     var mid     = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < mid) {
//             i++;
//         }
//         while (items[j] > mid) {
//             j--;
//         }
//         if (i <= j) {
//             console.log('item in partition', items, items[i], items[j])
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     console.log('exit partition', i)
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             console.log('left<index-1', left, right)
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             console.log('index<right', left, right)
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var items = [9,1,4,6,5,2,8,7,3];
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log('count', count)
// // console.log(sortedArray); //prints [2,3,5,6,7,9]

function swap(item, leftIndex, rightIndex) {
    console.log('swaping', item[leftIndex], item[rightIndex])
    let temp = item[leftIndex];
    item[leftIndex] = item[rightIndex];
    item[rightIndex] = temp;
    console.log('swaped', item)
}

function partition(item, left, right) {
    let mid = item[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (item[i] < mid) {
            i++;
        }
        while (item[j] > mid) {
            j--;
        }
        if (i <= j) {
            console.log('swap', item)
            swap(item, i, j)
            i++;
            j--;
        }
    }
    console.log('return i',i)
    return i
}

function quickSort(item, left, right){
    if(item.length > 1){
        var index = partition(item, left, right)
        if(left < index - 1){
            quickSort(item, left, index-1)
        }
        if(index < right){
            quickSort(item, index, right)
        }
    }
    return item
}

var arr = [9,8,7,6,5,4,3,2,1]
var sorted = quickSort(arr, 0, arr.length-1)
console.log('sorted', sorted)
