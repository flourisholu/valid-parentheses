/*
Author: Flourish Oluwamakinde

Given an input string containing only the following characters: "(", ")", "[", "]", "{", and "}",
this program determines if the input string is valid. An input string is valid if:
    1. Open brackets must be closed by the same type of bracket
    2. Open brackets must be closed in the correct order

Some constraints:
    1. Length of the string must be greater than 1 and less than 104
    2. The string must only consist of parentheses "{}[]()"
*/

function validParentheses(s){
    let closedParenthisis = ")";
    let closedSquare = "]";
    let closedCurly = "}";
    let brackets = [];
    let checkOpen = []; //to check number of open brackets
    let checkClosed = []; //to check number of closed brackets
    let inputLength = s.length;

    // check input string length constraint
    if(1 < inputLength <= 104){ 
        for(let i = 0; i<inputLength; i++){
            // if it's an open bracket, add its closing bracket to the empty array
            if(s[i] === "("){
                brackets.push(closedParenthisis);
                checkOpen.push(s[i]);
            }
            else if(s[i] === "["){
                brackets.push(closedSquare);
                checkOpen.push(s[i]);
            }
            else if(s[i] === "{"){
                brackets.push(closedCurly);
                checkOpen.push(s[i]);
            }
            //if it's a closed bracket, check if the previous element in the array matches this, then remove it for convenience
            else if(s[i] === ")"){
                if(brackets[brackets.length - 1] === "("){
                    brackets.pop();
                }
                checkClosed.push(s[i]);
            }
            else if(s[i] === "]"){
                if(brackets[brackets.length - 1] === "["){
                    brackets.pop();
                }
                checkClosed.push(s[i]);
            }
            else if(s[i] === "}"){
                if(brackets[brackets.length - 1] === "{"){
                    brackets.pop();
                }
                checkClosed.push(s[i]);
            }
            else{
                return "This is an invalid input";
            }

        }
    }
    else{
        return console.log("Your input is either too long or too short. Try again.")
    }

    // if brackets is empty and the closed brackets and open brackets arrays are equal, the input is valid; else, it is not
    let checkBracketsLength = brackets.length;
    let checkClosedLength = checkClosed.length;
    let checkOpenLength = checkOpen.length;

    if (checkBracketsLength == 0 && checkClosedLength === checkOpenLength){
        return console.log("Valid.")
    }
    //return checkLength === 0; // true if empty, false if not
    //return emptyArray;
}
console.log(validParentheses("("))