const arr = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
function compare(a, b) {
    return a > b
}

function change(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
function sort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (compare(arr[i], arr[j])) {
                change(arr, i, j)
            }
        }
    }
    return arr
}

sort(arr)
console.log(arr)