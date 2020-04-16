let str1 = 'Mary';
let str2 = 'Army';
function isAnagram(first, second) {

    var a = first.toLowerCase();
    var b = second.toLowerCase();
  
    
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
  
    return a == b;
}
console.log(isAnagram(str1,str2))