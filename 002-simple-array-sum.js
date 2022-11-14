
    main();


/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    let sum=0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

function main() {

    const ar = [1, 2, 3, 4, 10, 11]

    const result = simpleArraySum(ar);

    console.log(result)
}
