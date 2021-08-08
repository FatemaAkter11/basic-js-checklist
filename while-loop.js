//// Write a Program Using While Loop Where Loop Will be Start form 7 to 19.(odd numbers)
/* let i = 7;
let num = 0;
while (i <= 19) {
    console.log(i);
    i += 2;
} */


//another way(odd numbers)
let i = 7;
while (i <= 19) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
}