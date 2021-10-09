//final, map as dictionary to look up, 
//better time complex by a bit
var romanToInt = function (s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let decimal = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i+1] && (s[i+1] === 'V' || s[i+1] === 'X')) {
            decimal -= 1
            continue
        }
        
        if (s[i] === 'X' && s[i+1] && (s[i+1] === 'L' || s[i+1] === 'C')) {
            decimal -= 10
            continue
        }
        
        if (s[i] === 'C' && s[i+1] && (s[i+1] === 'D' || s[i+1] === 'M')) {
            decimal -= 100
            continue
        }
        
        decimal += symbols[s[i]]
    }
        
    return decimal;
};



//for loop tc 172 ms better then recursion but can be better
// let result = 0
//     for(let i = 0; i < s.length; i++){
//         if(s.charAt(i)==="M") result +=1000;
//         if(s.charAt(i)==="D") result +=500;
//         if(s.charAt(i)==="C") {
//             if(s.charAt(i+1)==="M"){
//                 result+=900
//                 i++
//             } else if (s.charAt(i+1)==="D"){
//                 result+=400
//                 i++
//             } else {
//                 result+=100
//             }
//         }
//         if(s.charAt(i)==="L") result +=50;
//         if(s.charAt(i)==="X") {
//             if(s.charAt(i+1)==="C"){
//                 result+=90
//                 i++
//             } else if (s.charAt(i+1)==="L"){
//                 result+=40
//                 i++
//             } else {
//                 result+=10
//             }
//         }
//         if(s.charAt(i)==="V") result +=5;
//         if(s.charAt(i)==="I") {
//             if(s.charAt(i+1)==="X"){
//                 result+=9
//                 i++
//             } else if (s.charAt(i+1)==="V"){
//                 result+=4
//                 i++
//             } else {
//                 result+=10
//             }
//         };
//     }
//     return result

//recursion TC 496 ms very bad
// let result = 0
// if (s.length === 0) {
//     return result
// }
// let recurse = (s) => {
//     if (s.charAt(0) === "M") {
//         result += 1000;
//         let reS = s.slice(1)
//         return recurse(reS)
//     }
//     else if (s.charAt(0) === "D") {
//         result += 500;
//         let reS = s.slice(1)
//         return recurse(reS)
//     }
//     else if (s.charAt(0) === "C") {
//         if (s.charAt(1) === "M") {
//             result += 900;
//             let reS = s.slice(2)
//             return recurse(reS)
//         } else if(s.charAt(1) === "D"){
//             result += 400;
//             let reS = s.slice(2)
//             return recurse(reS)
//         } else {
//             result += 100;
//             let reS = s.slice(1)
//             return recurse(reS)
//         }
//     }
//     else if (s.charAt(0) === "L") {
//         result += 50;
//         let reS = s.slice(1)
//         return recurse(reS)
//     }
//     else if (s.charAt(0) === "X") {
//         if (s.charAt(1) === "C") {
//             result += 90;
//             let reS = s.slice(2)
//             return recurse(reS)
//         } else if(s.charAt(1) === "L"){
//             result += 40;
//             let reS = s.slice(2)
//             return recurse(reS)
//         }
//         else {
//             result += 10;
//             let reS = s.slice(1)
//             return recurse(reS)
//         }
//     }
//     else if (s.charAt(0) === "V") {
//         result += 5;
//         let reS = s.slice(1)
//         return recurse(reS)
//     }
//     else if (s.charAt(0) === "I") {
//         if (s.charAt(1) === "V") {
//             result += 4;
//             let reS = s.slice(2)
//             return recurse(reS)
//         } else if (s.charAt(1) === "X") {
//             result += 9;
//             let reS = s.slice(2)
//             return recurse(reS)
//         } else {
//             result += 1
//             let reS = s.slice(1)
//             return recurse(reS)
//         }

//     }
// }
// recurse(s)
// return result