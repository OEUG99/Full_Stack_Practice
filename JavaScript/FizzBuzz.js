/*
The well known FizzBuzz coding question
 */

function fizzBuzz(x) {
    let temp;

    for (let i = 0; i <= x; i++){
        temp = '';

        if (i % 3 !== 0 && i % 5 !== 0){
            temp = i.toString();
        } else {
            if (i % 3 === 0){
                temp += "Fizz"
            }
            if (i % 5 === 0){
                temp += "Buzz"
            }
        }
        console.log(temp);
    }
}

fizzBuzz(100);