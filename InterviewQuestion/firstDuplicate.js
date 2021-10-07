//brute force
//O(n^2)
function firstDup(arr){
    let minSecIndex = arr.length;
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                minSecIndex = Math.min(minSecIndex, j);
            }
        }
    }

    if(minSecIndex === arr.length) return -1;
    else return arr[minSecIndex];
}

//Set
//O(n)
//this is using more space tho
function firstDuplicate (arr){
    seen = new Set();
    for(let i = 0; i<arr.length; i++){
        if(seen.has(arr[i])){
            return arr[i]
        } else {
            seen.add(arr[i])
        }
    }
    return -1;
}

//fucking five head solution
//O(n)
//no extra space
function galaxyBrain(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[Math.abs(arr[i]-1)] < 0){
            return Math.abs(arr[i]);
        } else {
            arr[Math.abs(arr[i])-1] = -arr[Math.abs(arr[i])-1]
        }
    }
}

const arr = [1,3,2,3,4,2];
console.log(firstDup(arr));
console.log(firstDuplicate(arr));
console.log(galaxyBrain(arr));