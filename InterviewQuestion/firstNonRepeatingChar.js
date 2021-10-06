//given a string consisting of small eng letters, 
//find and return the first instance of a non-repeating char in it;
//if there is none, return '_'

//brute force
function firstNonRepeatingChar (string){
    for(let i = 0; i < string.length; i++){
        let seen = false;
        for(let j = 0; j < string.length; j++){
            if(string.charAt(i) === string.charAt(j)){
                seen = true;
                break;
            }
        }
        if(!seen) return string.charAt(i);
    }
    return '_';
}

//hashmap
function firstNonRepeatingCharHashMap (string){
    const map1 = new Map();

    for(let i = 0; i<string.length; i++){
        let c = string.charAt(i);
        if(map1.has(c)){
            map1.set(c, map1.get(c)+1)
        } else {
            map1.set(c, 1)
        }
    }
    for(let i = 0; i<string.length; i++){
        let c = string.charAt(i);
        if(map1.get(c) === 1) {
            return c;
        }
    }

    return '_';
}

let string = 'aabbbccd';
console.log(firstNonRepeatingCharHashMap(string))

