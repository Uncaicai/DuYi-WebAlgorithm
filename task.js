var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function compare(a, b) {
    if (a < b) return true;
    else return false;
}

function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let maxIndex = i
        for (let j = i + 1; j < len; j++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j
            }
        }
        exchange(arr, i, maxIndex)
    }
}
sort(arr)
console.log(arr)
