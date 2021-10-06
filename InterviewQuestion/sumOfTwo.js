//given 2 int arr && target value
//determine is a pair of num where one from a and one from b
//can be added tgt to get sum of v
//true if possible, false if not

a=[0,0,-5,30212]
b=[-10,40,-3,9]
v=-8

//brute force
function sumOfTwoBru(a,b,v){
    for(let i = 0; i<a.length; i++){
        let vacancy = v - a[i];
        for(let j = 0; j<b.length; j++){
            if(b[j] === vacancy){
                console.log('found', i, j)
                return true
            }
        }
    }
    return false
}

//set
//lookup for set is const time
function sumOfTwoSet(a,b,v){
    let dif = new Set();
    for(let i = 0; i < a.length; i++){
        let vacancy = v - a[i]
        dif.add(vacancy)
    }
    for(let i = 0; i < b.length; i++){
        if(dif.has(b[i])) return true;
    }

    return false
}

console.log(sumOfTwoSet(a,b,v))