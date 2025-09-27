function isVow(array) {
  
  for (let i = 0; i < array.length; i++) {
    
    let char = String.fromCharCode(array[i]);

    
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

      array[i] = char;
    }
  }


  return array;
}


console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));


console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));



