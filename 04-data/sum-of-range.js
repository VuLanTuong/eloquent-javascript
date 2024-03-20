function range(start, end) {
    let result = []
    for (let i = start; start <= end; i++) {
        console.log(start);
        result.push(i)
    }
    return result;

}

console.log(range(1, 5));