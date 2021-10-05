var count = 0
//action
function swap(items, leftIndex, rightIndex){
    console.log('items in swap1', items)
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    console.log('items in swap2', items)
    count++
}

//break half
function partition(items, left, right) {
    var mid     = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < mid) {
            i++;
        }
        while (items[j] > mid) {
            j--;
        }
        if (i <= j) {
            console.log('item in partition', items)
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            // console.log('items in left',items)
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var items = [9,8,7,6,5,4,3,2,1];
var sortedArray = quickSort(items, 0, items.length - 1);
console.log('count', count)
// console.log(sortedArray); //prints [2,3,5,6,7,9]