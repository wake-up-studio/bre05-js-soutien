// *************************************************
// ARRAY & REVERSED ARRAY
// *************************************************

function displayArray(array){
    for(let item of array){
        console.log(item);
    }
}

// let array = [1, 2, 3, 4, 5];
// displayArray(array);
// array = [10, 20, 30, 40, 50];
// displayArray(array);
// array = [5, 4, 3, 2, 1];
// displayArray(array);
// array = [100, 200, 300, 400, 500];
// displayArray(array);

function displayArrayReverse(array){
    for(let i = array.length; i>=0; i--){
        console.log(array[i]);
    }
}

// let array = [1, 2, 3, 4, 5];
// displayArrayReverse(array);
// array = [10, 20, 30, 40, 50];
// displayArrayReverse(array);
// array = [5, 4, 3, 2, 1];
// displayArrayReverse(array);
// array = [100, 200, 300, 400, 500];
// displayArrayReverse(array);



// *************************************************
// LONGEST
// *************************************************

function findLongestWord(words){
    let x = 0
    let longest = ""
    
    for(let i=0; i<words.length;i++){
        if(words[i].length>x){
            x = words[i].length
            longest = words[i]
        }
    }
    return longest
}

// let words = ['hello', 'world', 'javascript', 'python', 'java'];
// findLongestWord(words)
// console.log(`le mot le plus long est ${findLongestWord(words)}`)
// words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// console.log(`le mot le plus long est ${findLongestWord(words)}`)
// words = ['cat', 'dog', 'elephant', 'fox'];
// console.log(`le mot le plus long est ${findLongestWord(words)}`)



// *************************************************
// NO DOPPLEGANGERS
// *************************************************

function removeDuplicates(array){
    let newArray = []
    
    for(let item of array){
        for(let newItem of newArray){
            newArray.push(item)
            if(item!==newItem){
                newArray.push(newItem)
                console.log(newArray)
            }
        }
    }
    return newArray
}

let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
removeDuplicates(array)