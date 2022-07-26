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
    let openParenthesis = "(";
    let openSquare = "[";
    let openCurly = "{";
    let brackets = [];
    let checkOpen = []; //to check number of open brackets
    let checkClosed = []; //to check number of closed brackets
    let inputLength = s.length;

    // check input string length constraint
    if(1 < inputLength <= 104){ 
        for(let i = 0; i<inputLength; i++){
            // if it's an open bracket, add it to brackets array
            if(s[i] === "("){
                brackets.push(openParenthesis);
                checkOpen.push(s[i]);
            }
            else if(s[i] === "["){
                brackets.push(openSquare);
                checkOpen.push(s[i]);
            }
            else if(s[i] === "{"){
                brackets.push(openCurly);
                checkOpen.push(s[i]);
            }
            // if it's a closed bracket, check if the previous element in the brackets array matches this
            // if it matches, remove the last element in the brackets array
            else if(s[i] === "\)"){
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

    let checkValidity = checkBracketsLength == 0 && checkClosedLength === checkOpenLength;

    // output 'valid' if input is valid and 'invalid'
    if (checkValidity === true){
        output = 'valid';
    }
    else{
        output = 'invalid';
    }
    
    return output;
}

// Tests:
console.log(validParentheses("()"))
console.log(validParentheses("()[]{}"))
console.log(validParentheses("(]"))
console.log(validParentheses("([)]"))
console.log(validParentheses("{[]}"))
