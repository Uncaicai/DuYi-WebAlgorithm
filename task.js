// const arr = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
const arr = [4, 1, 6, 9, 3, 2, 8, 7]
const arr2 = [4, 2, 5, 3, 1]
/**
 * 4 1 2 9 3 6 8 7
 * 4 1 2 3 9 6 8 7
 */

/**
 * 4 2 1 3 5
 */

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function quickSort(arr, start, end) {
    if (!arr || arr.length === 0) {
        return
    }
    if (start >= end - 1) {
        return
    }
    let left = start
    let right = end
    do {
        do {
            left++
        } while (left < right && arr[left] < arr[start]);
        do {
            right--
        } while (left < right && arr[right] > arr[start]);
        if (left < right) swap(arr, left, right)
    } while (left < right);
    const swapPoint = left === right ? left - 1 : right
    swap(arr, start, swapPoint)
    quickSort(arr, start, swapPoint)
    quickSort(arr, swapPoint + 1, end)
}

quickSort(arr, 0, arr.length)
quickSort(arr2, 0, arr2.length)
console.log(arr)
console.log(arr2)
