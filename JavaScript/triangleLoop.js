/*
Exercise from Eloquent JavaScript.

Write a loop that makes seven calls to console.log to output the following triangle:
#
##
##
###
####
#####
 */

function generateTriangle(x) {
    let result = "";

    for (let i = x; i >= 0; i--){
        result += "#";
        console.log(result)
    }
}

generateTriangle(7)