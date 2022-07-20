# Valid Parentheses Coding Challenge

## What does this program do?
Given an input string containing only the following characters: "(", ")", "[", "]", "{", and "}",
this program determines if the input string is valid. An input string is valid if:
    1. Open brackets must be closed by the same type of bracket
    2. Open brackets must be closed in the correct order
Some constraints:
    1. Length of the string must be greater than 1 and less than 104
    2. The string must only consist of parentheses "{}[]()"

## Understanding the solution
To solve this problem, it is important that we can keep track of each item/character in the input string to determine if the string is valid according to the requirements stated above. The following steps are taken:

1. Create variables that hold the opening brackets of the three parentheses types. This makes it easier to track if the open brackets are being closed by their significant part.
2. Create three empty arrays: one to track open brackets as we find them in the *for* loop, one to hold open brackets and another to hold closed brcakets.
3. Check if the input string follows the length constraint.
4. Loop through the input string.
5. If the character in the iteration is an open bracket, add it to two of the arrays - the one that holds open brackets and the that tracks them.
6. Once we encounter a closed bracket, check if the last item in the tracker array matches this closed bracket. If it is a match, remove it from the array. In addition to this, add the closed bracket to the array that holds closed brackets.
7. Once the iterations are complete, check the validity of the input string. The input is valid if:
    a. The tracking array is empty.
    b. The closed brackets array and the open brackets array are the same length.
    
## Other ways to go about this problem and its solution
