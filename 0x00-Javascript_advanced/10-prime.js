function countPrimeNumbers() {
    let primesOnly = 1
    for (let idx = 2; idx < 101; idx++) {
        for (let y = 2; y < 101; y++) {
            if (!(idx % y === 0))
                primesOnly++;
        }
    }
    return primesOnly
}
let start = performance.now();
for(let howMany = 0; howMany < 100; howMany++) {
    countPrimeNumbers();
}
let end = performance.now();
let lapsed = end - start
console.log("Execution time of printing countPrimeNumbers was " + lapsed + "milliseconds.")
