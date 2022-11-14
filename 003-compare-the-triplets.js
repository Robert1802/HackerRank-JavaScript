
main();

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let ap = 0,
    bp = 0

  for (let i = a.length; i-- > 0;) {
    if (a[i] > b[i])
      ap++
    else if (a[i] < b[i])
      bp++
  }

  return [ap, bp]
}

function main() {

    a = '5 6 7'.split(' ').map(a => parseInt(a))
    b = '3 6 10'.split(' ').map(b => parseInt(b))

    const result = compareTriplets(a, b);

    console.log(result)
}
