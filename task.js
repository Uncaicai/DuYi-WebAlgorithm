const a = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
function sort(arr) {
    if (!arr || arr?.length === 0) { return [] }
    const privot = arr[0]
    let left = []
    let right = []
    const len = arr.length
    for (let i = 1; i < len; i++) {
        if (arr[i] < privot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    left = sort(left)
    right = sort(right)
    left.push(privot)
    return left.concat(right)
}
console.log(sort(a))
