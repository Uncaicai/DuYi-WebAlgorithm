var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(qian, zhong) {
    const qianLen = qian?.length
    const zhongLen = zhong?.length
    if (!qianLen || !zhongLen || qianLen !== zhongLen) {
        return null
    }
    const root = new Node(qian[0])
    const zhongIndexOfRoot = zhong.indexOf(root.value)
    const leftLen = zhongIndexOfRoot
    root.left = f1(qian.slice(1, 1 + leftLen), zhong.slice(0, leftLen))
    root.right = f1(qian.slice(1 + leftLen, qianLen), zhong.slice(leftLen + 1, qianLen))
    return root
}

var root = f1(qian, zhong);

console.log(root.left);
console.log(root.right);