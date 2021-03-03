module.exports = function check(str, bracketsConfig) {
    const arr = [];
    const openBrackets = ['(','{','['];
    const closedBrackets = [')','}',']'];
    for (let letter of str) { 
        if(openBrackets.includes(letter)){ 
            arr.push(letter);
        }else if(closedBrackets.includes(letter)){ 
            const openPair = openBrackets[closedBrackets.indexOf(letter)]; 
            if(arr[arr.length - 1] === openPair){ 
                arr.splice(-1,1);
            }else{ 
                arr.push(letter);
                break;
            }
        }
    }
    return (arr.length === 0);
}
