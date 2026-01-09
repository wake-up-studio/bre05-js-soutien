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

// function isNumberInArray(number, array){

//     for(let item of array){
//         if(item===number){
//             return true;
//             break
//         }
//         else{
//             return false
//         }
//     }
// }

// console.log(isNumberInArray(21, [43, 54, -78, 19, 21, 42])); // doit envoyer true
// console.log(isNumberInArray(-7, [14, 28, -32, 56, 42, 19])); // doit renvoyer false

function removeDuplicates(array){
    let newArray = array
    
    for(let i=0; i<array.length; i++){
        for(let x=2; x<newArray.length; x++){
            if(array[i]===newArray[x]){
                newArray.pop(newArray[x])
            }
        }
    }
    return newArray
}

// let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
// console.log(removeDuplicates(array))
// array = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50]
// console.log(removeDuplicates(array))
// array = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
// console.log(removeDuplicates(array))



// *************************************************
// SORT IT
// *************************************************
// function isNumberInArray(number, numbers){

//     for(let nb of numbers){
//         if(nb===number){
//             return true;
//         }
//     }
//     return false
// }

// console.log(isNumberInArray(21, [43, 54, -78, 19, 21, 42]));

function sortAscending(numbers){
    let newNumbers = []

    console.log(newNumbers)
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]<newNumbers[0]){
            newNumbers.unshift(numbers[i])
            console.log(newNumbers)
        }
        else{
            newNumbers.push(numbers[i]) 
            console.log(newNumbers)
        }
    }
    return newNumbers
}

let numbers = [5, 3, 1, 4, 2]
console.log(sortAscending(numbers))